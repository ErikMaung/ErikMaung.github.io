import { useState, useEffect } from 'react';
import './Typewriter.css'

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  showCursor?: boolean;
}

export const Typewriter = ({ 
  phrases, 
  typingSpeed = 70, 
  deletingSpeed = 25, 
  pauseTime = 2500,
  showCursor = false,
}: TypewriterProps) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = phrases[currentPhraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing in
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        
        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phrases, currentPhraseIndex]);

  return (
    <span className="cursor-blink" style={{ borderRight: `${showCursor ? '2px solid lightgray' : 'none'}`, paddingRight: '4px', minHeight: '1.2em' }}>
      {displayText}
    </span>
  );
};