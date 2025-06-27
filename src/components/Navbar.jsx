import sunIconLight from "../assets/images/icon-sun-dark.svg";
import sunIconDark from "../assets/images/icon-sun-light.svg";
import moonIconLight from "../assets/images/icon-moon-dark.svg";
import moonIconDark from "../assets/images/icon-moon-light.svg";
import { useState } from "react";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function handleClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }
  return (
    <div className="flex items-center justify-end h-[4.5rem]">
      <img src={sunIconLight} alt="sun" />
      <div
        onClick={handleClick}
        className="relative w-[2rem] h-[1.25rem] bg-purple-600 rounded-full mx-2"
      >
        <div
          className={`absolute top-1/2 -translate-y-1/2 bg-white w-[0.75rem] h-[0.75rem] rounded-full transition-transform duration-300 ${
            isDarkMode ? "translate-x-[1.1rem]" : "translate-x-[0.1rem]"
          }`}
        ></div>
      </div>
      <img src={moonIconLight} alt="moon" />
    </div>
  );
}
