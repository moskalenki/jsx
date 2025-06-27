import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import QuizCategories from "./components/QuizCategories";
import Quiz from "./components/Quiz";

function App() {
  const [quiz, setQuiz] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setQuiz(data));
  }, []);

  useEffect(() => {
    console.log(currentQuiz);
  }, [currentQuiz]);

  useEffect(() => {
    console.log(quiz);
  }, [quiz]);
  return (
    <div className="px-6">
      <Navbar />
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
