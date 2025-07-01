import React from "react";

export default function Heading({ currentQuiz }) {
  return currentQuiz ? (
    <></>
  ) : (
    <div className="w-full mt-8 mb-10 lg:w-1/2 lg:pr-8 lg:mb-0 lg:mt-0">
      <h1 className="text-text-primary font-sans text-[2.5rem] md:text-[4rem] lg:text-[4rem] mb-4">
        Welcome to the
        <span className="font-bold text-text-primary"> Frontend Quiz!</span>
      </h1>
      <p className="text-[0.875rem] text-grey-500 font-sans md:text-[1.25rem]">
        Pick a subject to get started
      </p>
    </div>
  );
}
