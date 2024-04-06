import { useEffect, useState } from "react";
import type { RefObject } from "react";

function useIntersectionObserver(
  elementRef: RefObject<Element>,
  { threshold = 0, root = null, rootMargin = "0%" }: IntersectionObserverInit
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    if (window.IntersectionObserver && node) {
      const observer = new IntersectionObserver(updateEntry, {
        threshold,
        root,
        rootMargin,
      });

      observer.observe(node);

      return () => observer.disconnect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, root, rootMargin]);

  return entry;
}

export default useIntersectionObserver;
