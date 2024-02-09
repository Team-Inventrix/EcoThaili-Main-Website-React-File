import { useState, useEffect } from 'react';

const useResponsiveView = () => {
  const [viewSize, setViewSize] = useState('desktop');

  const updateViewSize = () => {
    const width = window.innerWidth;

    if (width <= 767) {
      setViewSize('mobile');
    } else if (width <= 1023) {
      setViewSize('tablet');
    } else {
      setViewSize('desktop');
    }
  };

  useEffect(() => {
    updateViewSize();

    window.addEventListener('resize', updateViewSize);

    return () => {
      globalThis.removeEventListener('resize', updateViewSize);
    };
  }, []);

  return viewSize;
};

export default useResponsiveView;