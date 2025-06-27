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

  useEffect(() => {
    console.log(currentQuiz);
  }, [currentQuiz]);

  useEffect(() => {
    console.log(quiz);
  }, [quiz]);
  return (
    <div className="px-6  h-screen">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Heading currentQuiz={currentQuiz} />
      {currentQuiz ? (
        <Quiz currentQuiz={currentQuiz} />
      ) : (
        <QuizCategories quiz={quiz} onQuizSelect={setCurrentQuiz} />
      )}
    </div>
  );
}

export default App;
