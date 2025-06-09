import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Scroll to top on all navigation types (POP, PUSH, REPLACE)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' instead of 'smooth' to prevent the scrolling animation
    });
  }, [pathname, navigationType]);

  return null;
}

export default ScrollToTop; 