import { useEffect, useRef } from "react";

export default function Input() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  useEffect(() => handleFocus(), []);

  return <input type="text" ref={inputRef}></input>;
}
