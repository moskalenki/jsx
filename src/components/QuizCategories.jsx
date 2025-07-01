import Category from "./Category";

export default function QuizCategories({ quiz, onQuizSelect }) {
  const quizzes = quiz?.quizzes || quiz || [];

  function handleCategoryClick(title) {
    const selectedQuiz = quizzes.find((q) => q.title === title);
    onQuizSelect(selectedQuiz);
  }

  if (!quizzes || quizzes.length === 0) {
    return <div className="text-grey-500">No quizzes available</div>;
  }

  return (
    <div className="space-y-4 lg:w-1/2">
      {quizzes.map((q, index) => (
        <Category key={index} q={q} onCategoryClick={handleCategoryClick} />
      ))}
    </div>
  );
}
