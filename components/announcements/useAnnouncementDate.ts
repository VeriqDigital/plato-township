"use client";

import { useSyncExternalStore } from "react";
import { getPlatoTownshipCalendarDate } from "@/data/announcements";

function subscribe(onDateChange: () => void) {
  let timer: ReturnType<typeof setTimeout>;
  const schedule = () => {
    // Chicago midnight falls on a UTC minute boundary, including during DST.
    timer = setTimeout(() => {
      onDateChange();
      schedule();
    }, 60_000 - (Date.now() % 60_000));
  };
  schedule();
  window.addEventListener("focus", onDateChange);
  document.addEventListener("visibilitychange", onDateChange);
  return () => {
    clearTimeout(timer);
    window.removeEventListener("focus", onDateChange);
    document.removeEventListener("visibilitychange", onDateChange);
  };
}

export function useAnnouncementDate(initialCalendarDate: string) {
  const calendarDate = useSyncExternalStore(
    subscribe,
    getPlatoTownshipCalendarDate,
    () => initialCalendarDate,
  );
  // UTC noon is always on the same calendar day in America/Chicago.
  return new Date(`${calendarDate}T12:00:00.000Z`);
}
