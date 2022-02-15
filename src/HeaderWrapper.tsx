import React, { useEffect, useState } from 'react';

export const HeaderWrapper = ({
  children,
  offset = 100,
}: {
  children: any;
  offset: number;
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // update inital state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        top: scrollY < offset ? '0px' : '-250px',
        transition: 'top 0.5s',
        position: 'fixed',
        width: '100%',
        zIndex: 10,
      }}
    >
      {children}
    </div>
  );
};
