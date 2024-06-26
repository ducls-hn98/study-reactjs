import { useEffect, useState } from "react";

export default function useDebounce(initValue = "", delay = 1000) {
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(initValue);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [initValue, delay]);

  return value;
}
