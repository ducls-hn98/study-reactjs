import { useLayoutEffect, useRef, useState } from "react";

export function Textarea() {
  const textareaRef = useRef(undefined);
  const [text, setText] = useState("");
  const [height, setHeight] = useState("auto");

  const handleTextChange = (event) => {
    setText(event.target.value);
    setHeight("auto");
  };

  useLayoutEffect(() => {
    setHeight(textareaRef.current.scrollHeight);
  }, [text]);

  return (
    <textarea
      name="textarea"
      ref={textareaRef}
      style={{
        height: height,
        overflow: "hidden",
      }}
      value={text}
      onChange={handleTextChange}
    ></textarea>
  );
}
