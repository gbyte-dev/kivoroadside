"use client";

import { Fragment, useEffect, useState, type KeyboardEvent, type MouseEvent } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import { cx } from "@/app/components/services/class-names";
import { REVIEWS, REVIEWS_PER_PAGE, type Review } from "./review-data";
import styles from "./reviews-widget.module.css";

// Yotpo's icon font: stars, thumbs, arrows and the other small glyphs
const yotpoIcons = localFont({
  src: "../../../public/fonts/yotpo-widget-font.woff",
  variable: "--font-yotpo-icons",
  display: "swap",
  adjustFontFallback: false,
});

// The search box is the only part set in Open Sans, as on the reference
const openSans = Open_Sans({ subsets: ["latin"], weight: "400", variable: "--font-open-sans", display: "swap" });

type FilterKey = "scores" | "images" | "location" | "recommended" | "quality" | "value";

type Filter = { key: FilterKey; label: string; options: string[] };

// Filter dropdowns in the order Yotpo shows them. Ratings are star counts.
const FILTERS: Filter[] = [
  { key: "scores", label: "Rating", options: ["5", "4", "3", "2", "1"] },
  { key: "images", label: "Images & Videos", options: ["With Images & Videos"] },
  { key: "location", label: "Location of service", options: ["Mobile", "Shop"] },
  {
    key: "recommended",
    label: "Recommended",
    options: ["1 (Never)", "2", "3", "4", "5", "6", "7", "8", "9", "10 (Definitely)"],
  },
  { key: "quality", label: "Quality of Service", options: ["Poor", "Fair", "Average", "Good", "Excellent"] },
  { key: "value", label: "Value of Service", options: ["Poor", "Fair", "Average", "Good", "Excellent"] },
];

type SortKey = "newest" | "highest" | "lowest" | "most" | "least";

const SORTS: { key: SortKey; label: string; compare: (a: Review, b: Review) => number }[] = [
  { key: "newest", label: "Newest", compare: (a, b) => dateKey(b.date).localeCompare(dateKey(a.date)) },
  { key: "highest", label: "Highest Rating", compare: (a, b) => b.score - a.score },
  { key: "lowest", label: "Lowest Rating", compare: (a, b) => a.score - b.score },
  { key: "most", label: "Most Votes", compare: (a, b) => b.votesUp - a.votesUp },
  { key: "least", label: "Least Votes", compare: (a, b) => b.votesDown - a.votesDown },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// "09/29/26" -> "260929", for sorting
function dateKey(date: string) {
  const [month, day, year] = date.split("/");
  return year + month + day;
}

// "09/29/26" -> "29 Sep 2026", as in Yotpo's screen reader text
function longDate(date: string) {
  const [month, day, year] = date.split("/");
  return `${Number(day)} ${MONTHS[Number(month) - 1]} 20${year}`;
}

// Enter and Space act like a click on elements that use role="button"
function onActivate(action: () => void) {
  return (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };
}

function starClass(score: number, position: number) {
  if (position <= score) return styles.iconStar;
  if (position - 0.5 <= score) return styles.iconHalfStar;
  return styles.iconEmptyStar;
}

function TextWithBreaks({ text }: { text: string }) {
  return text.split("\n").map((line, index) => (
    <Fragment key={index}>
      {index > 0 && <br />}
      {line}
    </Fragment>
  ));
}

type Network = "facebook" | "twitter" | "LinkedIn";

function shareUrl(network: Network, review: Review, pageUrl: string) {
  const text = `${review.content}${review.more ?? ""}`.replace(/\n/g, " ");
  const params = (values: Record<string, string>) => new URLSearchParams(values).toString();
  if (network === "facebook") return `https://www.facebook.com/sharer/sharer.php?${params({ u: pageUrl })}`;
  if (network === "twitter") return `https://twitter.com/intent/tweet?${params({ text, url: pageUrl })}`;
  return `https://www.linkedin.com/shareArticle?${params({ mini: "true", url: pageUrl, title: review.title, summary: text })}`;
}

type ReviewItemProps = {
  review: Review;
  expanded: boolean;
  sharing: boolean;
  pageUrl: string;
  vote?: "up" | "down";
  onToggleExpanded: () => void;
  onToggleShare: () => void;
  onVote: (direction: "up" | "down") => void;
};

function ReviewItem({
  review,
  expanded,
  sharing,
  pageUrl,
  vote,
  onToggleExpanded,
  onToggleShare,
  onVote,
}: ReviewItemProps) {
  const summary = `Review by ${review.name} on ${longDate(review.date)}`;
  const votesUp = review.votesUp + (vote === "up" ? 1 : 0);
  const votesDown = review.votesDown + (vote === "down" ? 1 : 0);
  const icon = (glyph: string, className?: string) => (
    <span className={cx(styles.icon, glyph, className)} aria-hidden="true" />
  );

  const shareLink = (network: Network) => (
    <span className={styles.footerLabel}>
      <a
        className={styles.socialLink}
        href={shareUrl(network, review, pageUrl)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${network} Share ${summary}`}
      >
        <i className={styles.socialText}>{network}</i>
      </a>
    </span>
  );

  const readMoreToggle = (label: string) => (
    <span
      className={styles.readMore}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      onClick={onToggleExpanded}
      onKeyDown={onActivate(onToggleExpanded)}
    >
      {label}
    </span>
  );

  return (
    <div className={styles.review}>
      <div className={styles.reviewHeader}>
        <span className={styles.avatar}>
          <span className={styles.avatarLetter}>{review.name.charAt(0).toUpperCase()}</span>
          {review.verified && icon(styles.iconCheck, styles.verifiedBadge)}
        </span>
        <div className={styles.headerElement}>
          <span className={styles.userName}>{review.name}</span>
          {review.verified && (
            <div className={styles.userTitleWrap}>
              <span className={styles.userTitle}>Verified Reviewer</span>
            </div>
          )}
          <div className={styles.clear} />
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((position) => (
              <Fragment key={position}>{icon(starClass(review.score, position), styles.star)}</Fragment>
            ))}
            <span className={styles.srOnly}>{review.score.toFixed(1)} star rating</span>
          </div>
          <div className={styles.clear} />
        </div>{" "}
        <div className={styles.headerActions}>
          <span className={styles.date} aria-label={`review date ${review.date}`}>
            {review.date}
          </span>
        </div>
      </div>

      <div className={styles.reviewMain}>
        <div className={styles.contentTitle} role="heading" aria-level={3}>
          {review.title}
        </div>
        <div className={styles.clear} />
        <div className={styles.reviewWrapper}>
          <span className={styles.srOnly}>{summary}</span>
          <div className={styles.reviewText}>
            <TextWithBreaks text={review.content} />
            {review.more && !expanded && readMoreToggle("...Read More")}
            {review.more && expanded && (
              <p className={styles.rest}>
                <TextWithBreaks text={review.more} />
                {readMoreToggle("Read Less")}
              </p>
            )}
          </div>
        </div>
        {review.photo && (
          <div className={styles.photos}>
            <Image className={styles.photo} src={review.photo.src} alt={review.photo.alt} width={130} height={130} />
            <div className={styles.clear} />
          </div>
        )}
      </div>

      <div className={styles.reviewFooter}>
        <div className={styles.footerActions}>
          <span
            className={styles.action}
            role="button"
            tabIndex={0}
            aria-expanded={sharing}
            aria-label={`Share ${summary}`}
            onClick={onToggleShare}
            onKeyDown={onActivate(onToggleShare)}
          >
            {icon(styles.iconShare, styles.shareIcon)} <span className={styles.footerLabel}>share</span>{" "}
            {icon(styles.iconSeparator, styles.separator)}{" "}
          </span>
          <span className={styles.shareOptions}>
            {sharing && (
              <>
                {shareLink("facebook")} {icon(styles.iconDot, styles.dot)} {shareLink("twitter")}{" "}
                {icon(styles.iconDot, styles.dot)} {shareLink("LinkedIn")} {icon(styles.iconSeparator, styles.separator)}
              </>
            )}
          </span>
        </div>
        <div className={styles.helpful} role="group">
          <span className={styles.footerLabel}>Was this review helpful?</span>{" "}
          <div
            className={styles.voteButton}
            role="button"
            tabIndex={0}
            aria-label={`vote up ${summary}`}
            aria-pressed={vote === "up"}
            onClick={() => onVote("up")}
            onKeyDown={onActivate(() => onVote("up"))}
          >
            {icon(styles.iconThumbsUp, styles.voteIcon)}
          </div>{" "}
          <span className={styles.footerLabel} aria-live="polite">
            {votesUp}
          </span>{" "}
          <div
            className={styles.voteButton}
            role="button"
            tabIndex={0}
            aria-label={`vote down ${summary}`}
            aria-pressed={vote === "down"}
            onClick={() => onVote("down")}
            onKeyDown={onActivate(() => onVote("down"))}
          >
            {icon(styles.iconThumbsDown, styles.voteIcon)}
          </div>{" "}
          <span className={styles.footerLabel} aria-live="polite">
            {votesDown}
          </span>
        </div>
        <div className={styles.clear} />
      </div>
    </div>
  );
}

function OptionStars({ count }: { count: number }) {
  return (
    <span className={styles.optionStars}>
      {[1, 2, 3, 4, 5].map((position) => (
        <span
          key={position}
          className={cx(styles.icon, position <= count ? styles.iconStar : styles.iconEmptyStar, styles.optionStar)}
          aria-hidden="true"
        />
      ))}
      <span className={styles.srOnly}>{count}.0 star rating</span>
    </span>
  );
}

// Reviews list with Yotpo's search, filters, sorting, votes and pages. It
// works on a saved snapshot of the reviews; the "Location", "Recommended",
// "Quality" and "Value" answers are not part of that snapshot, so choosing
// one of those only updates its dropdown.
export default function ReviewsWidget() {
  const [page, setPage] = useState(1);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [filters, setFilters] = useState<Partial<Record<FilterKey, string>>>({});
  const [sort, setSort] = useState<SortKey | null>(null);
  const [searchText, setSearchText] = useState("");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [sharing, setSharing] = useState<Record<string, boolean>>({});
  const [votes, setVotes] = useState<Record<string, "up" | "down">>({});
  const [pageUrl, setPageUrl] = useState("");

  // Close an open dropdown when clicking anywhere outside it
  useEffect(() => {
    if (!openMenu) return;
    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Element | null;
      if (!target?.closest(`[data-menu="${openMenu}"]`)) setOpenMenu(null);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [openMenu]);

  const needle = query.toLowerCase();
  const matching = REVIEWS.filter(
    (review) =>
      (!filters.scores || review.score === Number(filters.scores)) &&
      (!filters.images || Boolean(review.photo)) &&
      (!needle || `${review.name} ${review.title} ${review.content} ${review.more ?? ""}`.toLowerCase().includes(needle)),
  );
  const sortRule = SORTS.find((option) => option.key === sort);
  const results = sortRule ? [...matching].sort(sortRule.compare) : matching;
  const pageCount = Math.ceil(results.length / REVIEWS_PER_PAGE);
  const shown = results.slice((page - 1) * REVIEWS_PER_PAGE, page * REVIEWS_PER_PAGE);
  // Up to nine page numbers, sliding with the current page
  const firstPage = Math.max(1, Math.min(page - 4, pageCount - 8));
  const pageNumbers = Array.from({ length: Math.min(9, pageCount) }, (_, index) => firstPage + index);

  const hasFilters = Object.values(filters).some(Boolean) || query !== "";
  const sortLabel = sortRule?.label ?? (query ? "Most Relevant" : "Select");

  const toggleMenu = (menu: string) => setOpenMenu((current) => (current === menu ? null : menu));
  const menuKeys = (menu: string) => (event: KeyboardEvent) => {
    if (event.key === "Escape") setOpenMenu(null);
    else onActivate(() => toggleMenu(menu))(event);
  };

  function chooseFilter(key: FilterKey, value: string | null) {
    setFilters((current) => ({ ...current, [key]: value ?? undefined }));
    setPage(1);
    setOpenMenu(null);
  }

  function chooseSort(key: SortKey) {
    setSort(key);
    setPage(1);
    setOpenMenu(null);
  }

  function search(text: string) {
    setQuery(text.trim());
    setPage(1);
  }

  function clearAll() {
    setFilters({});
    setSearchText("");
    setQuery("");
    setPage(1);
  }

  function goTo(target: number) {
    return (event: MouseEvent) => {
      event.preventDefault();
      if (target >= 1 && target <= pageCount) setPage(target);
    };
  }

  function toggleShare(id: string) {
    setPageUrl(window.location.href);
    setSharing((current) => ({ ...current, [id]: !current[id] }));
  }

  function castVote(id: string, direction: "up" | "down") {
    setVotes((current) => {
      const next = { ...current };
      if (current[id] === direction) delete next[id];
      else next[id] = direction;
      return next;
    });
  }

  return (
    <div className={cx(styles.widget, yotpoIcons.variable, openSans.variable)}>
      <div className={styles.filters}>
        <div className={styles.filtersContainer}>
          <div className={styles.filtersTitle} role="heading" aria-level={2}>
            Filter Reviews
          </div>
          <div className={styles.search}>
            <span className={cx(styles.icon, styles.iconSearch, styles.searchIcon)} aria-hidden="true" />
            <input
              id="reviews-search"
              className={styles.searchInput}
              type="search"
              placeholder="Search Reviews"
              maxLength={120}
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") search(searchText);
              }}
            />
            <label className={styles.srOnly} htmlFor="reviews-search">
              Search Reviews
            </label>
            {searchText && (
              <button
                type="button"
                className={cx(styles.icon, styles.iconClose, styles.clearSearch)}
                aria-label="clear search text"
                onClick={() => {
                  setSearchText("");
                  search("");
                }}
              />
            )}
          </div>
          <div>
            <div className={styles.dropdowns}>
              {FILTERS.map((filter) => {
                const value = filters[filter.key];
                const open = openMenu === filter.key;
                const listId = `reviews-filter-${filter.key}`;
                return (
                  <div key={filter.key} className={styles.filterDropdown} data-menu={filter.key}>
                    <div
                      className={styles.dropdownButton}
                      role="combobox"
                      tabIndex={0}
                      aria-label={`${filter.label} Filter`}
                      aria-haspopup="listbox"
                      aria-expanded={open}
                      aria-controls={listId}
                      onClick={() => toggleMenu(filter.key)}
                      onKeyDown={menuKeys(filter.key)}
                    >
                      {filter.key === "scores" && value ? (
                        <span className={styles.selectedStars}>
                          {[1, 2, 3, 4, 5].map((position) => (
                            <span
                              key={position}
                              className={cx(
                                styles.icon,
                                position <= Number(value) ? styles.iconStar : styles.iconEmptyStar,
                                styles.selectedStar,
                              )}
                              aria-hidden="true"
                            />
                          ))}
                          <span className={styles.srOnly}>{value}.0 star rating</span>
                        </span>
                      ) : (
                        <span className={styles.dropdownLabel}>{value ?? filter.label}</span>
                      )}
                      <span className={cx(styles.icon, styles.iconTriangle, styles.dropdownArrow)} aria-hidden="true" />
                    </div>
                    {open && (
                      <ul className={styles.dropdownList} role="listbox" id={listId}>
                        {[null, ...filter.options].map((option) => (
                          <li
                            key={option ?? "all"}
                            className={styles.option}
                            role="option"
                            tabIndex={0}
                            aria-selected={(value ?? null) === option}
                            onClick={() => chooseFilter(filter.key, option)}
                            onKeyDown={onActivate(() => chooseFilter(filter.key, option))}
                          >
                            {filter.key === "scores" && option ? (
                              <OptionStars count={Number(option)} />
                            ) : (
                              <span className={(value ?? null) === option ? styles.optionSelected : styles.optionText}>
                                {option ?? "All"}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          {hasFilters && (
            <button type="button" className={styles.clearAll} onClick={clearAll}>
              <span className={styles.clearAllText}>Clear All</span>
            </button>
          )}
        </div>
      </div>

      <div className={styles.reviewsHeader}>
        <div className={styles.sort} data-menu="sort">
          <div
            className={styles.sortButton}
            role="combobox"
            tabIndex={0}
            aria-label="sort by"
            aria-haspopup="listbox"
            aria-expanded={openMenu === "sort"}
            aria-controls="reviews-sort"
            onClick={() => toggleMenu("sort")}
            onKeyDown={menuKeys("sort")}
          >
            <span className={styles.sortText}>Sort:</span> <span className={styles.sortValue}>{sortLabel}</span>{" "}
            <span className={cx(styles.icon, styles.iconTriangle, styles.sortArrow)} aria-hidden="true" />
          </div>
          {openMenu === "sort" && (
            <ul className={styles.dropdownList} role="listbox" id="reviews-sort">
              {SORTS.map((option) => (
                <li
                  key={option.key}
                  className={styles.option}
                  role="option"
                  tabIndex={0}
                  aria-selected={sort === option.key}
                  onClick={() => chooseSort(option.key)}
                  onKeyDown={onActivate(() => chooseSort(option.key))}
                >
                  <span className={sort === option.key ? styles.optionSelected : styles.optionText}>
                    {option.label}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div>
        {shown.map((review) => (
          <ReviewItem
            key={review.id}
            review={review}
            expanded={Boolean(expanded[review.id])}
            sharing={Boolean(sharing[review.id])}
            pageUrl={pageUrl}
            vote={votes[review.id]}
            onToggleExpanded={() => setExpanded((current) => ({ ...current, [review.id]: !current[review.id] }))}
            onToggleShare={() => toggleShare(review.id)}
            onVote={(direction) => castVote(review.id, direction)}
          />
        ))}
        {results.length === 0 && (
          <div className={styles.empty}>
            <span className={styles.emptyText}>No reviews match your search</span>
            <span className={styles.emptyClear} role="button" tabIndex={0} onClick={clearAll} onKeyDown={onActivate(clearAll)}>
              Clear All
            </span>
          </div>
        )}
        {pageCount > 1 && (
          <nav aria-label="Browse next and previous reviews">
            <div className={styles.pager}>
              <a
                href="#"
                className={cx(styles.pageLink, styles.icon, styles.iconArrowLeft, styles.pagePrev)}
                role="button"
                aria-label="Previous Page"
                aria-disabled={page === 1}
                onClick={goTo(page - 1)}
              />
              {pageNumbers.map((number) => (
                <a
                  key={number}
                  href="#"
                  className={cx(styles.pageLink, number === page && styles.pageActive)}
                  aria-current={number === page ? "true" : undefined}
                  aria-label={number === page ? `Page ${number}, Current Page` : `Goto Page ${number}`}
                  onClick={goTo(number)}
                >
                  {number}
                </a>
              ))}
              <a
                href="#"
                className={cx(styles.pageLink, styles.icon, styles.iconArrowRight, styles.pageNext)}
                role="button"
                aria-label="Next Page"
                aria-disabled={page === pageCount}
                onClick={goTo(page + 1)}
              />
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
