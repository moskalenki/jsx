import { useEffect, useState } from "react";

export default function Quiz({ currentQuiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [optionChoice, setOptionChoice] = useState("");
  const questions = currentQuiz.questions;
  const currentQuizQuestion = questions[currentQuestionIndex] || [];
  const correctAnswer = questions[currentQuestionIndex].answer;
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [playerSubmitted, setPlayerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);
  const letters = ["A", "B", "C", "D"];

  function userChoice(option) {
    setOptionChoice(option);
    const isCorrect = correctAnswer === option;
    setIsAnswerCorrect(isCorrect);
  }

  function handleConfirm() {
    setPlayerSubmitted(true);
    if (isAnswerCorrect) setScore((prevScore) => prevScore + 1);
  }

  function displayNextQuestion() {
    setOptionChoice("");
    setPlayerSubmitted(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setGameEnd(true);
    }
  }

  useEffect(() => {
    console.log("opt:", optionChoice);
  }, [optionChoice]);

  return (
    <div>
      {gameEnd ? (
        <div>
          <p className="flex flex-col text-[2.5rem] font-light mt-8 mb-10">
            Quiz completed<span className="font-medium">You scored...</span>
          </p>
          <div className="h-[242px]  p-8 rounded-[0.75rem] bg-background mb-4">
            <div className="flex items-center justify-center  m-auto">
              <img
                src={currentQuiz?.icon}
                alt={currentQuiz?.title}
                className="bg-purple-100 h-10 w-10 p-1 rounded-[0.25rem] mr-4"
              />
              <p className="text-[1.125rem] font-medium">
                {currentQuiz?.title}
              </p>
            </div>
            <div className="flex items-center justify-center flex-col ">
              <p className="text-[5.5rem] font-medium">{score}</p>
              <p className="text-blue-300 text-[1.125rem]">
                Out of {questions.length}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-10">
            <p className="text-grey-500 text-[0.875rem] mb-4">
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
            <h2 className="text-[1.25rem] font-semibold tracking-[-0.55px] leading-6 text-text-primary">
              {currentQuizQuestion.question}
            </h2>
          </div>
          {currentQuizQuestion.options.map((option, index) =>
            playerSubmitted ? (
              <button
                disabled={true}
                key={index}
                className={`
              ${
                option === correctAnswer && option === optionChoice
                  ? "border-green-500 border-3"
                  : ""
              }
              ${
                option === optionChoice && option !== correctAnswer
                  ? "border-red-500 border-3"
                  : ""
              }
            flex items-center mb-4 h-[4.5rem] p-4 rounded-[0.75rem] font-semibold w-full my-2 cursor-pointer drop-shadow-2xl bg-surface text-text-primary
            `}
              >
                <span
                  className="mr-4 px-5 py-3 rounded-lg border-none text-text-secondary"
                  style={{ backgroundColor: "var(--color-surface-hover)" }}
                >
                  {letters[index]}
                </span>
                <span className="text-left">{option}</span>
              </button>
            ) : (
              <button
                key={index}
                onClick={() => userChoice(option)}
                className={`flex items-center mb-4 h-[4.5rem] p-4 rounded-[0.75rem] font-semibold w-full my-2 cursor-pointer drop-shadow-2xl bg-surface text-text-primary  ${
                  option === optionChoice
                    ? "border-3 border-primary"
                    : "border-1 border-transparent"
                }`}
              >
                <span
                  className="mr-4 px-5 py-3 rounded-lg border-none text-text-secondary"
                  style={{ backgroundColor: "var(--color-surface-hover)" }}
                >
                  {letters[index]}
                </span>
                <span className="text-left">{option}</span>
              </button>
            )
          )}
        </>
      )}

      {gameEnd ? (
        <button className="border-1 w-full p-4 text-white border-none rounded-[0.75rem] bg-primary">
          Play Again
        </button>
      ) : playerSubmitted ? (
        <button
          onClick={displayNextQuestion}
          className="border-1 w-full p-4 text-white border-none rounded-[0.75rem] bg-primary"
        >
          Next Question
        </button>
      ) : (
        optionChoice && (
          <button
            onClick={handleConfirm}
            className="border-1 w-full p-4 text-white border-none rounded-[0.75rem] bg-primary"
          >
            Submit Answer
          </button>
        )
      )}
    </div>
  );
}
