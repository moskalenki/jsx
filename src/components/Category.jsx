import React from "react";

export default function Category({ q, index, onCategoryClick }) {
  return (
    <div
      onClick={() => onCategoryClick(q.title)}
      key={index}
      className="flex items-center h-[4.5rem] gap-4 p-4 bg-white rounded-lg shadow-sm hover:bg-grey-50 cursor-pointer transition-colors"
    >
      <img src={q.icon} alt={`${q.title} icon`} className="w-8 h-8" />
      <span className="text-[#313E51] font-medium text-lg">{q.title}</span>
    </div>
  );
}
