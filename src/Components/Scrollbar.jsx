import React, { useEffect, useRef, useState } from 'react';
import '../Scrollbar.css';

const Scrollbar = () => {
  const thumbRef = useRef(null);
  const barRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true); // Track visibility state
  const [thumbPosition, setThumbPosition] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(50);
  const hideTimeout = useRef(null);

  // Function to update the thumb position and height
  const updateScrollbar = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrolled = window.scrollY;

    const barHeight = barRef.current?.offsetHeight || 0;  // Get the total available height for the scrollbar
    const calculatedThumbHeight = Math.max(
      (clientHeight / scrollHeight) * barHeight, // Dynamic thumb height based on the scrollable area
      50 // Ensure thumb height does not become too small (you can adjust the minimum height)
    );
    const maxThumbPosition = barHeight - calculatedThumbHeight;
    const calculatedThumbPosition = (scrolled / (scrollHeight - clientHeight)) * maxThumbPosition;

    setThumbHeight(calculatedThumbHeight);
    setThumbPosition(calculatedThumbPosition);
  };

  const handleScroll = () => {
    setIsVisible(true);  // Show scrollbar when scrolling
    updateScrollbar();  // Update thumb position

    // Hide after 1 second if the user stops scrolling
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => setIsVisible(false), 1000);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);  // Listen for scroll events
    window.addEventListener('resize', updateScrollbar);  // Listen for resize events to adjust scrollbar size

    // Initial update
    updateScrollbar();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollbar);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      updateScrollbar();
    }
  }, [isVisible]);

  return (
    <div
      className={`c-scrollbar ${isVisible ? 'visible' : 'hidden'}`}
      ref={barRef}
    >
      <div
        className="c-scrollbar_thumb"
        ref={thumbRef}
        style={{
          height: `${thumbHeight}px`,  // Set dynamic thumb height
          transform: `translateY(${thumbPosition}px)`,  // Set dynamic thumb position
        }}
      ></div>
    </div>
  );
};

export default Scrollbar;
