import { useEffect, useState } from "react";

// Custom hook (defined outside the component)
const useTypingEffect = (words, typeSpeed = 150) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
          if (currentText === currentWord) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? typeSpeed / 3 : typeSpeed
    );
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed]);

  return currentText;
};

// Component that uses the custom hook
function TypePolaroid() {
  const words = ["Developer", "Designer", "Creator"];
  const currentText = useTypingEffect(words, 150);

  return (
    <div className="polaroid-film bg-white p-6 w-70 h-80 rounded-lg shadow-xl transform flex flex-col justify-center items-center">
      <div className="text-center">
        <div className="text-xl polaroid-name">
          <span className="block text-[#107373]/50 text-5xl">I'm a</span>
          <span className="text-[#107373] font-bold text-5xl">
            {currentText}
            <span className="animate-pulse text-[#107373]">|</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TypePolaroid;
