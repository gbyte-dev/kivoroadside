"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./cookie-preferences.module.css";

const OPEN_EVENT = "cookie-preferences:open";
const STORAGE_KEY = "cookie-preferences";

// Opens the "Privacy Preferences" popup from anywhere on the page
export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

// A button that opens the popup, for links styled by the caller
export function CookiePreferencesButton({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <button type="button" className={className} onClick={openCookiePreferences}>
      {children}
    </button>
  );
}

type TabKey = "privacy" | "necessary" | "targeting";

const TABS: { key: TabKey; title: string }[] = [
  { key: "privacy", title: "Your Privacy" },
  { key: "necessary", title: "Strictly Necessary Cookies" },
  { key: "targeting", title: "Targeting Cookies" },
];

const ALWAYS_ACTIVE_GROUPS = [
  {
    title: "Functional Cookies",
    text: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.",
  },
  {
    title: "Performance Cookies",
    text: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.",
  },
];

// Saved choice for targeting cookies (on unless the visitor turned them off)
function readTargeting() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? Boolean(JSON.parse(saved).targeting) : true;
  } catch {
    return true;
  }
}

function saveTargeting(targeting: boolean) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ targeting }));
  } catch {
    // Storage can be unavailable (private mode); the choice then lasts for this visit only
  }
}

function TabPanel({
  tab,
  targeting,
  onTargetingChange,
}: {
  tab: TabKey;
  targeting: boolean;
  onTargetingChange: (on: boolean) => void;
}) {
  if (tab === "privacy") {
    return (
      <div className={styles.description}>
        <h4 className={styles.privacyHeading}>Your Privacy</h4>
        <p className={styles.text}>
          When you visit our website, we store cookies on your browser to collect information. The information collected
          might relate to you, your preferences or your device, and is mostly used to make the site work as you expect
          it to and to provide a more personalized web experience. However, you can choose not to allow certain types of
          cookies, which may impact your experience of the site and the services we are able to offer. Click on the
          different category headings to find out more and change our default settings according to your preference. You
          cannot opt-out of our First Party Strictly Necessary Cookies as they are deployed in order to ensure the
          proper functioning of our website (such as prompting the cookie banner and remembering your settings, to log
          into your account, to redirect you when you log out, etc). For more information about the First and Third
          Party Cookies used please follow this link.
          <br />
          <Link className={styles.moreLink} href="/safelite-group-privacy-policy">
            More information.
          </Link>
        </p>
      </div>
    );
  }

  if (tab === "necessary") {
    return (
      <div className={styles.description}>
        <div className={styles.groupHeader}>
          <h4>Strictly Necessary Cookies</h4>
          <div className={styles.alwaysActive}>Always Active</div>
        </div>
        <p className={`${styles.text} ${styles.groupText}`}>
          These cookies are necessary for the website to function and cannot be switched off in our systems. They are
          usually only set in response to actions made by you which amount to a request for services, such as setting
          your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about
          these cookies, but some parts of the site will not then work. These cookies do not store any personally
          identifiable information.
        </p>
        {ALWAYS_ACTIVE_GROUPS.map((group) => (
          <ul key={group.title} className={styles.subgroups}>
            <li className={styles.subgroup}>
              <div className={styles.subgroupHeader}>
                <h5>{group.title}</h5>
                <div className={styles.alwaysActive}>Always Active</div>
              </div>
              <p>{group.text}</p>
            </li>
          </ul>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.description}>
      <div className={styles.groupHeader}>
        <h4>Targeting Cookies</h4>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={targeting}
            aria-label="Targeting Cookies"
            onChange={(event) => onTargetingChange(event.target.checked)}
          />
          <span className={styles.track} />
        </label>
      </div>
      <p className={`${styles.text} ${styles.groupText}`}>
        These cookies may be set through our site by our advertising partners. They may be used by those companies to
        build a profile of your interests and show you relevant adverts on other sites. They do not store directly
        personal information, but are based on uniquely identifying your browser and internet device. If you do not
        allow these cookies, you will experience less targeted advertising.
      </p>
    </div>
  );
}

// The "Privacy Preferences" popup. Render it once; it opens on openCookiePreferences().
export default function CookiePreferences() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<TabKey>("privacy");
  const [targeting, setTargeting] = useState(true);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleOpen() {
      setTab("privacy");
      setTargeting(readTargeting());
      setOpen(true);
    }
    window.addEventListener(OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_EVENT, handleOpen);
  }, []);

  // While open: keep the page from scrolling, focus the close button, close on Escape
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  if (!open) return null;

  const close = () => setOpen(false);
  const confirm = () => {
    saveTargeting(targeting);
    close();
  };
  const rejectAll = () => {
    saveTargeting(false);
    close();
  };

  const panel = <TabPanel tab={tab} targeting={targeting} onTargetingChange={setTargeting} />;

  return (
    <>
      <div className={styles.backdrop} />
      <div className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="cookie-preferences-title">
        <div className={styles.header}>
          <div className={styles.logo}>
            <Image src="/image/cookie-preferences/safelite-logo.png" alt="Company Logo" width={160} height={40} />
          </div>
          <div className={styles.titleWrap}>
            <h2 id="cookie-preferences-title" className={styles.title}>
              Privacy Preferences
            </h2>
          </div>
          <button
            ref={closeButton}
            type="button"
            className={styles.close}
            aria-label="Close preference center"
            onClick={close}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.tabList}>
            <ul className={styles.tabs} role="tablist" aria-orientation="vertical">
              {TABS.map((item) => {
                const active = item.key === tab;
                return (
                  <li key={item.key}>
                    <div
                      className={[styles.tab, active && styles.activeTab].filter(Boolean).join(" ")}
                      role="tab"
                      tabIndex={0}
                      aria-selected={active}
                      onClick={() => setTab(item.key)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setTab(item.key);
                        }
                      }}
                    >
                      <h3>{item.title}</h3>
                    </div>
                    {active && <div className={styles.inlinePanel}>{panel}</div>}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.tabPanel} role="tabpanel">
            {panel}
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.buttons}>
            <button type="button" className={styles.button} onClick={confirm}>
              Confirm My Choices
            </button>
            <div className={styles.rejectWrap}>
              <button type="button" className={styles.button} onClick={rejectAll}>
                Reject All
              </button>
            </div>
          </div>
          <div className={styles.poweredBy}>
            <a href="https://www.onetrust.com/products/cookie-consent/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/image/cookie-preferences/powered-by-onetrust.svg"
                alt="Powered by Onetrust"
                title="Powered by OneTrust Opens in a new Tab"
                width={136}
                height={16}
                unoptimized
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
