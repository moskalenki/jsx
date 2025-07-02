import { useState } from "react";

export default function Quiz({ currentQuiz, clearCurrentQuiz }) {
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

  function resetQuiz() {
    setCurrentQuestionIndex(0);
    setOptionChoice("");
    setPlayerSubmitted(false);
    setScore(0);
    setGameEnd(false);
    setIsAnswerCorrect(null);
  }
  return (
    <>
      {gameEnd ? (
        <div className="lg:flex lg:flex-row lg:gap-16 2 lg:w-full  md:p-16 lg:p-0 md:w-[540px] md:m-auto sm:-w[327px]  lg:p-16 w-[327px] m-auto">
          <div className="w-full mt-8 mb-10 lg:w-1/2 lg:pr-8 lg:mb-0 lg:mt-0  lg:w-1/2 ">
            <p className="flex flex-col text-[2.5rem] font-light lg:text-[4rem] lg:leading-[1.1]">
              Quiz completed<span className="font-medium">You scored...</span>
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="p-8 rounded-[0.75rem] bg-background shadow-xl lg:h-[512px] lg:p-[3rem] shadow-xl shadow-gray">
              <div className="flex items-center justify-center m-auto mb-4 lg:mb-10">
                <img
                  src={currentQuiz?.icon}
                  alt={currentQuiz?.title}
                  className="bg-purple-100 h-10 w-10 p-1 rounded-[0.25rem] mr-4"
                />
                <p className="text-[1.125rem] font-medium lg:text-[1.75rem]">
                  {currentQuiz?.title}
                </p>
              </div>
              <div className="flex items-center justify-center flex-col">
                <p className="text-[5.5rem] font-medium lg:text-[9rem] lg:mb-4">{score}</p>
                <p className="text-blue-300 text-[1.125rem] lg:text-[1.5rem]">
                  Out of {questions.length}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                resetQuiz();
                clearCurrentQuiz();
              }}
              className="cursor-pointer border-1 w-full p-4 text-white border-none mt-4 rounded-[0.75rem] bg-primary lg:p-8 lg:text-[1.75rem]"
            >
              Play Again
            </button>
          </div>
        </div>
      ) : (
        <div className="lg:flex lg:flex-row lg:gap-16 w-full">
          <div className="w-full mt-8 mb-10 lg:w-1/2 lg:pr-8 lg:mb-0 lg:mt-0">
            <p className="text-text-muted text-[0.875rem] mb-4 lg:text-[1.25rem]">
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
            <h2 className="text-[1.25rem] font-semibold tracking-[-0.55px] leading-6 text-text-primary lg:text-[2.25rem] lg:leading-10">
              {currentQuizQuestion.question}
            </h2>
          </div>

          <div className="w-full lg:w-1/2">
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
              flex items-center mb-4 h-[4.5rem] p-4 rounded-[0.75rem] font-semibold w-full my-2 cursor-pointer drop-shadow-2xl bg-surface text-text-primary lg:-w-[35.25rem] lg:min-h-[6.5rem]
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
                  className={`flex items-center mb-4 h-[4.5rem] p-4 rounded-[0.75rem] font-semibold w-full my-2 cursor-pointer drop-shadow-2xl bg-surface text-text-primary lg:-w-[35.25rem] lg:min-h-[6.5rem] ${
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

            <div className="mt-4">
              {playerSubmitted ? (
                <button
                  onClick={displayNextQuestion}
                  className="cursor-pointer border-1 w-full p-4 text-white border-none rounded-[0.75rem] bg-primary"
                >
                  Next Question
                </button>
              ) : (
                optionChoice && (
                  <button
                    onClick={handleConfirm}
                    className="cursor-pointer border-1 w-full p-4 text-white border-none rounded-[0.75rem] bg-primary"
                  >
                    Submit Answer
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
