import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  useEffect(() => {
    if (value !== null) {
      localStorage.setItem(key, value);
    }
  }, [key, value]);

  return [value, setValue];
}