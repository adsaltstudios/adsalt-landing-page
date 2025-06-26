
import { useState, useEffect, useRef, useCallback } from 'react';

export const useScrollAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  const updateScrollProgress = useCallback((entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (!entry) return;

    const { boundingClientRect, rootBounds } = entry;
    if (!rootBounds) return;

    // Calculate when logo bottom edge reaches 20% from top of viewport
    const triggerPoint = rootBounds.height * 0.2;
    const logoBottom = boundingClientRect.bottom;
    
    // Calculate progress (0 = not started, 1 = fully animated)
    let progress = 0;
    if (logoBottom <= triggerPoint) {
      // Animation should complete over 200px of scroll after trigger
      const scrollDistance = triggerPoint - logoBottom;
      progress = Math.min(scrollDistance / 200, 1);
    }

    console.log('Scroll Animation Debug:', {
      logoBottom,
      triggerPoint,
      progress,
      isIntersecting: entry.isIntersecting
    });

    setScrollProgress(progress);
    setIsAnimating(progress > 0 && progress < 1);
  }, []);

  useEffect(() => {
    if (!logoRef.current) return;

    // Create intersection observer to track logo position
    observerRef.current = new IntersectionObserver(
      updateScrollProgress,
      {
        root: null,
        rootMargin: '0px',
        threshold: Array.from({ length: 101 }, (_, i) => i / 100) // Track every 1% change
      }
    );

    observerRef.current.observe(logoRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [updateScrollProgress]);

  return {
    scrollProgress,
    isAnimating,
    logoRef
  };
};
