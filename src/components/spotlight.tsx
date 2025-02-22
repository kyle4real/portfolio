"use client";

import { useRef, useState } from "react";

export type SpotlightProps = {
  children: React.ReactNode;
};

export const Spotlight: React.FC<SpotlightProps> = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const div = containerRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div ref={containerRef} onMouseMove={onMouseMove} className="relative">
      {children}

      <div
        className="pointer-events-none z-30 fixed inset-0 transition duration-300 lg:block hidden"
        style={{
          opacity: 1,
          background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgb(142, 197, 255, 0.06), transparent 80%)`,
        }}
      />
    </div>
  );
};
