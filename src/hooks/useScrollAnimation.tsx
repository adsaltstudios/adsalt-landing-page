
import { useState, useEffect, useRef, useCallback } from 'react';

export const useScrollAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const logoRef = useRef<HTMLDivElement | null>(null);

  const updateScrollProgress = useCallback(() => {
    if (!logoRef.current) return;

    const logoRect = logoRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    // Calculate trigger point (20% from top of viewport)
    const triggerPoint = viewportHeight * 0.2;
    const logoBottom = logoRect.bottom;
    
    console.log('Scroll Animation Debug:', {
      logoBottom,
      triggerPoint,
      viewportHeight,
      logoRect: {
        top: logoRect.top,
        bottom: logoRect.bottom,
        left: logoRect.left,
        right: logoRect.right
      }
    });

    // Calculate progress (0 = not started, 1 = fully animated)
    let progress = 0;
    if (logoBottom <= triggerPoint) {
      // Animation should complete over 200px of scroll after trigger
      const scrollDistance = triggerPoint - logoBottom;
      progress = Math.min(scrollDistance / 200, 1);
    }

    console.log('Progress calculated:', progress);

    setScrollProgress(progress);
    setIsAnimating(progress > 0 && progress < 1);
  }, []);

  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial calculation
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [updateScrollProgress]);

  return {
    scrollProgress,
    isAnimating,
    logoRef
  };
};
