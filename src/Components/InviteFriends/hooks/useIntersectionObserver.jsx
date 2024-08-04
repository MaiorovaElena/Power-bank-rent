import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = (callback, options) => {
  const [observerEntry, setObserverEntry] = useState(null);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setObserverEntry(entries[0]);
      if (entries[0].isIntersecting) {
        callback();
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, options, callback]);

  return elementRef;
};

export default useIntersectionObserver;
