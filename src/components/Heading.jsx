import React from "react";

export default function Heading({ currentQuiz }) {
  return currentQuiz ? (
    <></>
  ) : (
    <div className="w-full mt-8 mb-10">
      <h1 className="text-text-primary font-sans text-4xl mb-4">
        Welcome to the
        <span className="font-bold text-text-primary"> Frontend Quiz!</span>
      </h1>
      <p className="text-[0.875rem] text-grey-500 font-sans">
        Pick a subject to get started
      </p>
    </div>
  );
}
