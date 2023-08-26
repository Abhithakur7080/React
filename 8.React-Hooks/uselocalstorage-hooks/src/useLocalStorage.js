import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  // Add the state and effect here
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);
  return [value, setValue];
};

export default useLocalStorage;
