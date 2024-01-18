import React, { useRef, useLayoutEffect } from 'react';

const CursorFollower = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const delayFactor = 8;

  useLayoutEffect(() => {
    const handleMouseMove = (e: any) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useLayoutEffect(() => {
    const animateFollower = () => {
      const follower = followerRef.current;

      if (follower) {
        const distX = (mousePos.current.x - follower.offsetLeft) / delayFactor;
        const distY = (mousePos.current.y - follower.offsetTop) / delayFactor;

        follower.style.left = follower.offsetLeft + distX + 'px';
        follower.style.top = follower.offsetTop + distY + 'px';
      }

      requestAnimationFrame(animateFollower);
    };

    requestAnimationFrame(animateFollower);
  }, []);

  return (
    <div
      ref={followerRef}
      className="pointer-events-none fixed z-20 aspect-square w-[40px] -translate-x-[20px] -translate-y-[20px] rounded-full backdrop-invert"
    />
  );
};

export default CursorFollower;
