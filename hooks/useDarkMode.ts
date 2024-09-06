'use client';

import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
  }

  useEffect(() => {
    const checkDarkMode = () => {
      return document.body.classList.contains('dark');
    };

    setIsDarkMode(checkDarkMode());

    const observer = new MutationObserver(() => {
      setIsDarkMode(checkDarkMode());
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
