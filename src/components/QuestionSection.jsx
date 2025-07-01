export default function QuestionSection({
  currentQuestionIndex,
  totalQuestions,
  question,
}) {
  return (
    <div className="w-full mt-8 mb-10 lg:w-1/2 lg:pr-8 lg:mb-0 lg:mt-0 ">
      <p className="text-grey-500 text-[0.875rem] mb-4">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </p>
      <h2 className="text-[1.25rem] font-semibold tracking-[-0.55px] leading-6 text-text-primary lg:text-[2.25rem] lg:leading-10">
        {question}
      </h2>
    </div>
  );
}
