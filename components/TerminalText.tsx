"use client";
import { useEffect, useState } from "react";

interface TerminalTextProps {
  text: string;
  speed?: number;
}

export default function TerminalText({ text, speed = 50 }: TerminalTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && <span className="terminal-cursor">|</span>}
    </span>
  );
}
