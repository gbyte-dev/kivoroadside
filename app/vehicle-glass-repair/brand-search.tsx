"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { BRANDS, BRAND_LINKS } from "./vehicle-brands";

const MAX_RESULTS = 8;

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

// Brands starting with what was typed, ignoring case, spaces and dashes
function findMatches(search: string) {
  if (!search.trim()) return [];
  const query = normalize(search.trim());
  return BRANDS.filter((brand) => normalize(brand).startsWith(query)).slice(0, MAX_RESULTS);
}

function exactBrand(search: string) {
  const query = normalize(search.trim());
  return BRANDS.find((brand) => normalize(brand) === query) ?? null;
}

// "Enter vehicle brand" autocomplete with the Find button. Up to eight
// suggestions; arrow keys, Tab and Enter work like on the reference.
export default function BrandSearch() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [active, setActive] = useState(-1);

  const hasValue = value.trim().length > 0;
  const noMatch = hasValue && findMatches(value).length === 0;
  const matched = exactBrand(value);
  const isOpen = results.length > 0;

  // Typing may not start with a symbol or a space
  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;
    const handleBeforeInput = (event: InputEvent) => {
      if (!event.data || !event.inputType.startsWith("insert")) return;
      const start = input.selectionStart ?? input.value.length;
      const end = input.selectionEnd ?? input.value.length;
      const next = input.value.slice(0, start) + event.data + input.value.slice(end);
      if (next && !/^[\p{L}\p{N}]/u.test(next)) event.preventDefault();
    };
    input.addEventListener("beforeinput", handleBeforeInput);
    return () => input.removeEventListener("beforeinput", handleBeforeInput);
  }, []);

  // Clicking anywhere outside the search closes the list
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest("[data-brand-autocomplete]")) return;
      setResults([]);
      setActive(-1);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isOpen]);

  // Keep the highlighted suggestion in view
  useEffect(() => {
    if (active > -1) document.getElementById(`brand-option-${active}`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  function closeResults() {
    setResults([]);
    setActive(-1);
  }

  function handleChange(next: string) {
    setValue(next);
    const matches = findMatches(next);
    setResults(matches);
    // The first suggestion is highlighted right away
    setActive(matches.length ? 0 : -1);
  }

  function selectBrand(brand: string) {
    setValue(brand);
    closeResults();
  }

  function goTo(brand: string | null) {
    const url = brand ? BRAND_LINKS[brand] : undefined;
    if (url) router.push(url);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (isOpen && active > -1) {
        const brand = results[active];
        selectBrand(brand);
        goTo(exactBrand(brand));
        return;
      }
      if (matched) goTo(matched);
      return;
    }
    if (!isOpen) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((active + 1) % results.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive(active === -1 ? results.length - 1 : (active - 1 + results.length) % results.length);
    } else if (event.key === "Tab") {
      event.preventDefault();
      if (active === -1) setActive(event.shiftKey ? results.length - 1 : 0);
      else selectBrand(results[active]);
    } else if (event.key === "Escape") {
      closeResults();
    }
  }

  const labelRaised = "top-[.35rem] left-4 translate-y-0 text-[.8rem]";
  const iconFill = noMatch ? "fill-[#db0020]" : "";

  // Bottom line: gray, thicker on hover; blue on focus or for a known brand; red when nothing matches
  let inputState =
    "bg-[#f7f7f7] border-b-[1.5px] border-b-[#6d6d6d] group-hover/brand:border-b-[2.5px] focus:border-b-[2.5px] focus:border-b-[#0070d1]";
  if (noMatch) {
    inputState =
      "bg-[rgba(255,166,152,.16)] border-b-[1.5px] border-b-[#db0020] group-hover/brand:border-b-[2.5px] focus:border-b-[2.5px]";
  } else if (matched) {
    inputState = "bg-[#f7f7f7] border-b-[2.5px] border-b-[#0070d1]";
  }

  return (
    // .brand-search-container
    <div className="group/brand relative mx-auto w-full max-w-[1024px]">
      <form
        onSubmit={(event) => event.preventDefault()}
        onReset={(event) => {
          event.preventDefault();
          setValue("");
          closeResults();
          if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
        }}
      >
        <label
          htmlFor="brand-search"
          className={`pointer-events-none absolute z-[1] p-0 font-normal leading-none transition-[top,left,color,font-size,translate] duration-200 ease-[ease] ${
            hasValue
              ? `${labelRaised} text-[#0a0a0a]`
              : `left-12 top-7 -translate-y-1/2 text-base text-[#4b4c4e] group-focus-within/brand:top-[.35rem] group-focus-within/brand:left-4 group-focus-within/brand:translate-y-0 group-focus-within/brand:text-[.8rem] group-focus-within/brand:text-[#0070d1]`
          }`}
        >
          Enter vehicle brand
        </label>
        {/* .autocomplete */}
        <div className="relative" data-brand-autocomplete>
          {/* .controls: side by side above 992px */}
          <div className="flex flex-col gap-6 min-[992.02px]:flex-row min-[992.02px]:gap-2">
            {/* .field */}
            <div className="group/field relative h-14 min-w-0 flex-1">
              <svg
                className={`pointer-events-none absolute left-4 size-6 -translate-y-1/2 fill-[#4b4c4e] transition-[top] duration-300 ease-[ease] ${iconFill} ${
                  hasValue ? "top-9" : "top-1/2 group-focus-within/field:top-9"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19.29 19.51"
                aria-hidden="true"
                focusable="false"
              >
                <path d="m17.3 6.47-.22-.29c.13-.01.25-.03.38-.05.41-.06.7-.44.64-.85a.74.74 0 0 0-.85-.63c-.38.05-.76.1-1.14.14l-.97-2.65A2.82 2.82 0 0 0 12.96.31c-2.58-.41-5.2-.41-7.8 0-.99.18-1.82.88-2.16 1.83l-.96 2.65c-.39-.03-.79-.09-1.18-.14a.747.747 0 1 0-.21 1.48c.14.02.29.04.43.05l-.25.35a4.2 4.2 0 0 0-.81 2.49v4.81c-.02.45.16.87.47 1.19.32.31.74.49 1.19.49h1.83c.92 0 1.67-.75 1.67-1.68v-.37c0-.1.08-.18.18-.18h4.55a.749.749 0 1 0 0-1.5H5.36c-.93 0-1.68.75-1.68 1.68v.37c0 .1-.07.18-.17.18H1.68c-.1 0-.17-.08-.17-.18V9.02c.01-.58.19-1.14.53-1.61l.74-1.02a60 60 0 0 0 12.58 0l.73.98c.35.48.54 1.04.54 1.64a.749.749 0 1 0 1.5 0c0-.92-.29-1.79-.83-2.54M3.58 4.96l.83-2.32c.16-.44.55-.77 1-.85 2.43-.38 4.89-.38 7.31 0 .46.08.85.41 1.01.85l.84 2.32c-3.66.35-7.33.35-10.99 0M6.54 9.26c0 .41-.34.75-.75.75H4.13a.749.749 0 1 1 0-1.5h1.66c.41 0 .75.33.75.75M14.74 9.26c0 .41-.33.75-.75.75h-1.66c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.66c.42 0 .75.33.75.75M19.07 18.23l-1.03-1.03c.93-1.41.78-3.33-.45-4.59-.01-.01-.02-.01-.03-.02-.69-.7-1.61-1.08-2.6-1.08s-1.9.38-2.6 1.08a3.68 3.68 0 0 0 .01 5.2 3.67 3.67 0 0 0 4.61.47l1.03 1.03c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.76 0-1.06m-2.57-1.5c-.84.85-2.23.85-3.07 0-.85-.85-.85-2.23-.01-3.08.42-.41.96-.64 1.54-.64s1.11.22 1.52.62c.01 0 .02 0 .02.02a2.17 2.17 0 0 1 0 3.08" />
              </svg>
              <input
                ref={inputRef}
                id="brand-search"
                type="text"
                autoComplete="off"
                placeholder=" "
                role="combobox"
                aria-autocomplete="list"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-controls="brand-results"
                aria-activedescendant={isOpen && active > -1 ? `brand-option-${active}` : undefined}
                aria-describedby="brand-search-info brand-search-error"
                value={value}
                onChange={(event) => handleChange(event.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={() => setTimeout(closeResults, 100)}
                className={`h-14 w-full rounded-t-[8px] pb-2 pl-12 pr-3 pt-6 text-base leading-normal tracking-normal text-black outline-0 transition-all duration-200 ease-[ease] hover:bg-[rgba(147,149,152,.16)] ${inputState}`}
              />
              <button
                type="reset"
                aria-label="Clear search"
                className={`absolute right-4 top-1/2 size-6 -translate-y-1/2 cursor-pointer items-center justify-center border-none bg-transparent p-[6px] ${
                  hasValue ? "flex" : "hidden"
                }`}
              >
                <svg
                  className={`transition-[top] duration-300 ease-[ease] ${noMatch ? "fill-[#db0020]" : "fill-[#0070d1]"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="m13.89 12 9.72-9.73c.52-.51.52-1.37 0-1.88-.51-.52-1.37-.52-1.88 0L12 10.11 2.28.39a1.34 1.34 0 0 0-1.89 0c-.51.51-.51 1.37 0 1.88L10.12 12 .39 21.72c-.51.52-.51 1.37 0 1.89a1.34 1.34 0 0 0 1.89 0L12 13.88l9.73 9.73c.27.27.6.39.94.39s.68-.12.94-.39c.52-.52.52-1.37 0-1.89z" />
                </svg>
              </button>
              <span
                id="brand-search-info"
                className={`absolute -bottom-6 left-4 w-full items-center text-[#4b4c4e] ${noMatch ? "hidden" : "inline-flex"}`}
              >
                <svg className="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0m0 23.02C5.92 23.02.98 18.08.98 12S5.92.98 12 .98 23.02 5.92 23.02 12 18.08 23.02 12 23.02" />
                  <path d="M12.5 11.22v5.5a.49.49 0 0 1-.98 0v-5.5c0-.27.22-.48.49-.48s.49.21.49.48M12.49 7.26c0 .27-.22.52-.49.52s-.49-.17-.49-.44v-.08a.49.49 0 0 1 .98 0" />
                </svg>
                <span className="ml-1 text-[.75rem]">(e.g. Toyota)</span>
              </span>
              <span
                id="brand-search-error"
                aria-live="polite"
                className={`absolute -bottom-6 left-4 w-full items-center ${noMatch ? "inline-flex" : "hidden"}`}
              >
                <svg
                  className="size-3 fill-[#db0020]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M23.55 17.86 14.93 2.79c-.6-1.06-1.7-1.69-2.92-1.69s-2.32.63-2.93 1.69L.45 17.86c-.6 1.06-.6 2.31.01 3.37.61 1.05 1.7 1.67 2.92 1.67h17.24c1.22 0 2.31-.62 2.92-1.67.61-1.06.61-2.31.01-3.37m-1.57 2.46c-.28.49-.79.79-1.36.79H3.38c-.57 0-1.08-.3-1.36-.79-.29-.49-.29-1.07-.01-1.57l8.63-15.07c.29-.49.8-.79 1.37-.79s1.08.3 1.36.79l8.62 15.07c.28.5.28 1.08-.01 1.57" />
                  <path d="M12.9 9.87v3.71c0 .5-.41.9-.9.9s-.9-.4-.9-.9V9.87c0-.5.4-.9.9-.9s.9.4.9.9M12.9 17.28c0 .5-.4.9-.9.9s-.91-.4-.91-.9.4-.89.9-.89H12c.5 0 .9.4.9.89" />
                </svg>
                <span className="ml-1 text-[.75rem] text-[#db0020]">{noMatch ? "Invalid vehicle brand" : ""}</span>
              </span>
              <ul
                id="brand-results"
                role="listbox"
                className={`absolute top-14 z-10 m-0 max-h-[220px] w-full list-none overflow-y-auto rounded-b-[8px] border border-[#ccc] bg-white p-0 shadow-[0_2px_4px_0_rgba(55,56,57,.32),0_2px_12px_0_rgba(55,56,57,.32)] ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {results.map((brand, index) => (
                  <li
                    key={brand}
                    id={`brand-option-${index}`}
                    role="option"
                    aria-selected={index === active}
                    onMouseDown={() => selectBrand(brand)}
                    className="flex h-14 cursor-pointer items-center border-b-[1.5px] border-b-[#e9e9e9] px-3 py-[.65rem] font-semibold last:border-b-0 hover:bg-[rgba(237,238,238,.72)] aria-selected:bg-[rgba(237,238,238,.72)]"
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              aria-disabled={!matched}
              onClick={() => goTo(matched)}
              className="flex h-14 w-fit min-w-[177px] cursor-pointer items-center justify-center rounded-[16px] border border-[#0070d1] bg-[#0070d1] px-12 text-base font-medium leading-none tracking-normal text-white hover:bg-[#0063ad] focus:outline-0 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#95c2e9]"
            >
              Find
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
