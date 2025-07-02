import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import QuizCategories from "./components/QuizCategories";
import Quiz from "./components/Quiz";
import quizData from "../data.json";

function App() {
  const [quiz, setQuiz] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setQuiz(quizData.quizzes);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
    }
  }, []);

  function clearCurrentQuiz() {
    setCurrentQuiz(null);
  }

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="px-6 min-h-screen lg:px-0 lg:py-16">
      <div className="mx-auto lg:max-w-[80rem] md:p-12">
        <Navbar
          isDark={isDark}
          toggleTheme={toggleTheme}
          currentQuiz={currentQuiz}
        />
        <div className="lg:flex lg:flex-row lg:gap-16 lg:items-start">
          <Heading currentQuiz={currentQuiz} />
          {currentQuiz ? (
            <Quiz
              currentQuiz={currentQuiz}
              clearCurrentQuiz={clearCurrentQuiz}
            />
          ) : (
            <QuizCategories quiz={quiz} onQuizSelect={setCurrentQuiz} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
