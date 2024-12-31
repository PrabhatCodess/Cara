import React, { useRef, useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import heroVideo from "/home.mp4";

const HeroVideo = () => {
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });

    const handleScroll = () => {
      const container = videoContainerRef.current;
      if (!container) return;

      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress relative to container visibility
      const progress = Math.min(
        Math.max((viewportHeight - containerTop) / containerHeight, 0),
        1
      );
      setScrollProgress(progress);
    };

    lenis.on("scroll", handleScroll);

    const animate = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scaling and positioning logic
  const scale = 0.5 + scrollProgress * 0.5; // Scale from 50% to 100%
  const translateY = 50 * (1 - scrollProgress); // Slide up as it grows

  return (
    <div className="relative w-full h-[100vh] bg-gray-100">
      {/* Parent container */}
      <div
        ref={videoContainerRef}
        className="relative w-full h-[100vh] overflow-hidden "
      >
        <div
          ref={videoRef}
          className="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{
            width: `${scale * 100}%`, // Scale width to parent bounds
            height: `${scale * 100}%`, // Scale height to parent bounds
            transform: `translate(-50%, -${translateY}%) scale(${scale})`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
