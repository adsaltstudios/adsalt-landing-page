
import { useState, useEffect, useCallback } from 'react';

interface ScrollAnimationState {
  isHeaderVisible: boolean;
  logoScale: number;
  headingScale: number;
  animationProgress: number;
}

export const useScrollAnimation = (): ScrollAnimationState => {
  const [state, setState] = useState<ScrollAnimationState>({
    isHeaderVisible: false,
    logoScale: 1,
    headingScale: 1,
    animationProgress: 0
  });

  // Throttled update function to reduce stuttering
  const throttledUpdate = useCallback((progress: number) => {
    // Only update if change is significant (reduces stuttering)
    if (Math.abs(progress - state.animationProgress) > 0.01) {
      setState(prev => ({
        ...prev,
        animationProgress: progress,
        logoScale: Math.max(0.3125, 1 - progress),
        headingScale: Math.max(window.innerWidth >= 768 ? 0.25 : 0.333, 1 - progress),
        isHeaderVisible: progress > 0.7
      }));
    }
  }, [state.animationProgress]);

  const updateScrollState = useCallback(() => {
    const heroElement = document.querySelector('#hero-section .w-32');
    if (!heroElement) return;

    const rect = heroElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const triggerPoint = viewportHeight * 0.2; // 20% from viewport top
    
    // Calculate progress when element's bottom edge reaches trigger point
    const elementBottom = rect.bottom;
    const progress = Math.max(0, Math.min(1, (triggerPoint - elementBottom) / (triggerPoint + rect.height)));
    
    throttledUpdate(progress);
  }, [throttledUpdate]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setState(prev => ({ ...prev, logoScale: 1, headingScale: 1 }));
      return;
    }

    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(() => {
          updateScrollState();
        });
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5] }
    );

    const heroElement = document.querySelector('#hero-section .w-32');
    if (heroElement) {
      observer.observe(heroElement);
    }

    // Throttled scroll handler for 60fps (16.67ms intervals)
    let lastScrollTime = 0;
    let animationFrameId: number;

    const throttledScrollHandler = () => {
      const now = Date.now();
      if (now - lastScrollTime >= 16.67) {
        lastScrollTime = now;
        animationFrameId = requestAnimationFrame(updateScrollState);
      }
    };

    // Check initial scroll position
    const initialScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (initialScrollTop > 0) {
      updateScrollState();
    }

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', throttledScrollHandler);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [updateScrollState]);

  return state;
};
