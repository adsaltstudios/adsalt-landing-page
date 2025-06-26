
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
    const logoTop = logoRect.top;
    const logoBottom = logoRect.bottom;
    
    console.log('Scroll Animation Debug:', {
      logoTop,
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

    // Start animation immediately when scrolling begins
    // Calculate progress based on how far the logo has moved from its initial position
    let progress = 0;
    
    // Estimate initial logo position (assuming hero section centers the logo)
    const estimatedInitialLogoTop = viewportHeight * 0.35; // Rough estimate of centered position
    
    if (logoTop < estimatedInitialLogoTop) {
      // Calculate how far we've scrolled from the initial position
      const scrolledDistance = estimatedInitialLogoTop - logoTop;
      // Complete the animation over approximately 400px of scroll
      progress = Math.min(scrolledDistance / 400, 1);
    }

    console.log('Progress calculated:', progress, 'logoTop:', logoTop, 'estimated initial:', estimatedInitialLogoTop);

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
