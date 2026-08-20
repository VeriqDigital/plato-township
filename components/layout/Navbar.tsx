"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navigation, siteConfig } from "@/config/site";

const Chevron = ({ open = false }: { open?: boolean }) => (
  <span
    aria-hidden="true"
    className={`ml-1 text-[10px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    ▾
  </span>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const suppressedHoverDropdown = useRef<number | null>(null);

  const closeNavigation = () => {
    suppressedHoverDropdown.current = null;
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdown((currentDropdown) => {
      const isClosingCurrentDropdown = currentDropdown === index;
      suppressedHoverDropdown.current = isClosingCurrentDropdown ? index : null;
      return isClosingCurrentDropdown ? null : index;
    });
  };

  const toggleMobileMenu = () => {
    suppressedHoverDropdown.current = null;
    setOpenDropdown(null);
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        suppressedHoverDropdown.current = null;
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        suppressedHoverDropdown.current = null;
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    const desktopViewport = window.matchMedia("(min-width: 1320px)");
    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        suppressedHoverDropdown.current = null;
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("pointerdown", handlePointerDown);
    desktopViewport.addEventListener("change", handleViewportChange);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("pointerdown", handlePointerDown);
      desktopViewport.removeEventListener("change", handleViewportChange);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-(--navy) text-white shadow-[0_12px_32px_rgba(6,20,39,0.16)]"
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-20 w-full max-w-(--container-width) items-center px-5 sm:px-8"
      >
        <Link
          href="/"
          aria-label="Plato Township home"
          className="group flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
          onClick={closeNavigation}
        >
          <span className="relative grid size-10 shrink-0 place-items-center border border-white/35 font-heading text-2xl font-semibold sm:size-11">
            P
            <span className="absolute -right-1 -top-1 size-2.5 bg-(--red)" />
          </span>
          <span className="min-w-0 leading-none">
            <span className="block font-heading text-lg font-semibold uppercase tracking-[0.06em] min-[360px]:text-xl min-[360px]:tracking-[0.08em]">
              {siteConfig.name}
            </span>
            <span className="mt-1.5 hidden text-[9px] font-semibold uppercase tracking-[0.28em] text-white/55 min-[360px]:block">
              Kane County, Illinois
            </span>
          </span>
        </Link>

        <div className="ml-auto hidden h-full items-stretch min-[1320px]:flex">
          {navigation.map((item, index) => {
            if (!("items" in item)) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => {
                    suppressedHoverDropdown.current = null;
                    setOpenDropdown(null);
                  }}
                  onFocus={() => setOpenDropdown(null)}
                  className="flex items-center border-b-2 border-transparent px-4 text-[13px] font-semibold text-white/76 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              );
            }

            const group = item;
            const isOpen = openDropdown === index;

            return (
              <div
                key={group.label}
                className="relative flex items-stretch"
                onMouseEnter={() => {
                  if (suppressedHoverDropdown.current !== index) {
                    setOpenDropdown(index);
                  }
                }}
                onMouseLeave={() => {
                  suppressedHoverDropdown.current = null;
                  setOpenDropdown(null);
                }}
              >
                {group.href ? (
                  <div
                    className={`flex items-center border-b-2 px-4 text-[13px] font-semibold transition-colors ${
                      isOpen
                        ? "border-(--red) bg-white/5 text-white"
                        : "border-transparent text-white/76 hover:text-white"
                    }`}
                  >
                    <Link
                      href={group.href}
                      onClick={closeNavigation}
                      className="flex h-full items-center pr-1"
                    >
                      {group.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleDropdown(index)}
                      aria-label={`Toggle ${group.label} menu`}
                      aria-haspopup="menu"
                      aria-expanded={isOpen}
                      aria-controls={`desktop-submenu-${index}`}
                      className="flex h-full min-w-9 items-center justify-center pl-1"
                    >
                      <Chevron open={isOpen} />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => toggleDropdown(index)}
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    aria-controls={`desktop-submenu-${index}`}
                    className={`flex items-center border-b-2 px-4 text-[13px] font-semibold transition-colors ${
                      isOpen
                        ? "border-(--red) bg-white/5 text-white"
                        : "border-transparent text-white/76 hover:text-white"
                    }`}
                  >
                    {group.label}
                    <Chevron open={isOpen} />
                  </button>
                )}

                {isOpen && (
                  <div
                    id={`desktop-submenu-${index}`}
                    role="menu"
                    className="absolute right-0 top-full min-w-64 border-t-2 border-(--red) bg-white p-2 text-(--navy) shadow-[0_22px_50px_rgba(4,18,36,0.28)]"
                  >
                    {group.items.map((item) => item.href ? (
                      <Link
                        key={`${group.label}-${item.label}`}
                        href={item.href}
                        role="menuitem"
                        onClick={closeNavigation}
                        className="group flex items-center justify-between gap-6 px-4 py-3 text-sm font-semibold transition hover:bg-(--mist)"
                      >
                        {item.label}
                        <span
                          aria-hidden="true"
                          className="text-(--red) transition-transform group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    ) : (
                      <span
                        key={`${group.label}-${item.label}`}
                        role="menuitem"
                        aria-disabled="true"
                        className="flex items-center justify-between gap-6 px-4 py-3 text-sm font-semibold text-(--ink-muted)"
                      >
                        {item.label}
                        <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-(--ink-muted)">
                          Coming soon
                        </span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <Link
          href={`tel:${siteConfig.contact.officePhone.replaceAll("-", "")}`}
          className="ml-auto hidden border border-white/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:border-(--red) hover:bg-(--red) lg:inline-flex min-[1320px]:ml-4"
        >
          {siteConfig.contact.officePhone}
        </Link>

        <button
          type="button"
          className="ml-auto grid size-11 place-items-center border border-white/25 text-white transition hover:border-white lg:ml-4 min-[1320px]:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-primary-navigation"
          onClick={toggleMobileMenu}
        >
          <span className="grid gap-1.5" aria-hidden="true">
            <span className={`block h-0.5 w-5 bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-primary-navigation"
          className="max-h-[calc(100svh-5rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-(--navy) px-5 pb-7 text-white min-[1320px]:hidden"
        >
          <div className="mx-auto max-w-(--container-width)">
            {navigation.map((item, index) => {
              if (!("items" in item)) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeNavigation}
                    className="flex min-h-14 items-center border-b border-white/12 text-sm font-semibold"
                  >
                    {item.label}
                  </Link>
                );
              }

              const group = item;
              const isOpen = openDropdown === index;
              return (
                <div key={group.label} className="border-b border-white/12">
                  {group.href ? (
                    <div className="flex min-h-14 items-stretch">
                      <Link
                        href={group.href}
                        onClick={closeNavigation}
                        className="flex min-w-0 flex-1 items-center pr-4 text-sm font-semibold"
                      >
                        {group.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => toggleDropdown(index)}
                        aria-label={`Toggle ${group.label} menu`}
                        aria-expanded={isOpen}
                        aria-controls={`mobile-submenu-${index}`}
                        className="flex min-h-14 min-w-14 shrink-0 items-center justify-end border-l border-white/12 text-white/80 transition hover:bg-white/5 hover:text-white"
                      >
                        <Chevron open={isOpen} />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => toggleDropdown(index)}
                      aria-expanded={isOpen}
                      aria-controls={`mobile-submenu-${index}`}
                      className="flex min-h-14 w-full items-center justify-between text-left text-sm font-semibold"
                    >
                      {group.label}
                      <Chevron open={isOpen} />
                    </button>
                  )}
                  {isOpen && (
                    <div id={`mobile-submenu-${index}`} className="grid gap-1 pb-4">
                      {group.items.map((item) => item.href ? (
                        <Link
                          key={`${group.label}-mobile-${item.label}`}
                          href={item.href}
                          onClick={closeNavigation}
                          className="flex min-h-11 items-center border-l border-(--red) py-2 pl-4 text-sm text-white/68 transition hover:bg-white/5 hover:text-white"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span
                          key={`${group.label}-mobile-${item.label}`}
                          aria-disabled="true"
                          className="flex min-h-11 items-center border-l border-white/18 py-2 pl-4 text-sm text-white/40"
                        >
                          {item.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              href={`tel:${siteConfig.contact.officePhone.replaceAll("-", "")}`}
              className="mt-6 flex min-h-14 w-full flex-col items-start justify-center gap-1 bg-white px-5 py-3 text-sm font-bold text-(--navy) min-[360px]:flex-row min-[360px]:items-center min-[360px]:justify-between"
            >
              Call the Township Office
              <span>{siteConfig.contact.officePhone}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
