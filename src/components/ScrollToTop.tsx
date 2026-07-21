import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const scrollToPageTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    scrollToPageTop();
    const frameId = window.requestAnimationFrame(scrollToPageTop);
    const timeoutId = window.setTimeout(scrollToPageTop, 0);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
    };
  }, [pathname, search]);

  return null;
}
