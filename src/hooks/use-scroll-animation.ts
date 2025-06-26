
import { useState, useEffect } from 'react';

interface ScrollAnimationState {
  isHeaderVisible: boolean;
  scrollProgress: number;
}

export const useScrollAnimation = (): ScrollAnimationState => {
  const [state, setState] = useState<ScrollAnimationState>({
    isHeaderVisible: false,
    scrollProgress: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      // Calculate simple scroll progress (0 to 1)
      const progress = Math.min(scrollY / (windowHeight * 0.5), 1);
      
      setState({
        scrollProgress: progress,
        isHeaderVisible: progress > 0.3 // Show header after 30% scroll
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return state;
};
