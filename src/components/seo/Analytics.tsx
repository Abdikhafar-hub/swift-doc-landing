"use client";

import { useEffect } from "react";

const endpoint = process.env["NEXT_PUBLIC_ANALYTICS_ENDPOINT"];

export function Analytics() {
  useEffect(() => {
    if (!endpoint) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const tracked = target?.closest<HTMLElement>("[data-analytics-event]");
      if (!tracked) return;
      const payload = {
        event: tracked.dataset["analyticsEvent"],
        label: tracked.dataset["analyticsLabel"] || tracked.textContent?.trim(),
        path: window.location.pathname,
      };
      navigator.sendBeacon(endpoint, JSON.stringify(payload));
    };

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return null;
}
