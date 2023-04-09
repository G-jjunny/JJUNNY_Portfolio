import React, { useEffect, useState } from "react";

const TypingAnimation = ({ text, delay, onComplete }) => {
  const [displayText, setDisplayText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(displayText + text[count]);
      setCount(count + 1);
    }, delay);
    if (count === text.length) {
      clearInterval(interval);
      onComplete();
    }
    return () => clearInterval(interval);
  }, [count, delay, displayText, onComplete, text]);

  return <div>{displayText}</div>;
};

export default TypingAnimation;
