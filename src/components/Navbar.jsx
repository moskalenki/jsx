import sunIconLight from "../assets/images/icon-sun-dark.svg";
import sunIconDark from "../assets/images/icon-sun-light.svg";
import moonIconLight from "../assets/images/icon-moon-dark.svg";
import moonIconDark from "../assets/images/icon-moon-light.svg";

export default function Navbar({ isDark, toggleTheme, currentQuiz }) {
  const quizTitle = currentQuiz?.title;
  const currentQuizImage = currentQuiz?.icon;

  return (
    <div
      className={`flex items-center h-[4.5rem] py-4 mb-8 lg:mb-16 ${
        currentQuiz ? "justify-between" : "justify-end"
      }`}
    >
      {currentQuiz && (
        <div className="flex items-center justify-center">
          <img
            src={currentQuizImage}
            alt={quizTitle}
            className="bg-purple-100 w-[2.5rem] h-[2.5rem] p-1 rounded-[0.25rem] mr-4"
          />
          <p className="text-[1.125rem]">{quizTitle}</p>
        </div>
      )}

      <div className="flex">
        <img
          src={isDark ? sunIconDark : sunIconLight}
          alt="sun"
          className="w-4 h-4 lg:w-6 lg:h-6"
        />
        <div
          onClick={toggleTheme}
          className="relative w-[2rem] h-[1.25rem] rounded-full mx-2 cursor-pointer bg-primary lg:w-[3rem] lg:h-[1.75rem] "
        >
          <div
            className={`absolute top-1/2 -translate-y-1/2 w-[0.75rem] h-[0.75rem] rounded-full transition-transform duration-300 bg-surface ${
              isDark
                ? "translate-x-[1.1rem] lg:translate-x-[1.9rem]"
                : "translate-x-[0.1rem] lg:translate-x-[0.3rem]"
            }`}
          ></div>
        </div>
        <img
          src={isDark ? moonIconDark : moonIconLight}
          alt="moon"
          className="w-4 h-4 lg:w-6 lg:h-6"
        />
      </div>
    </div>
  );
}
