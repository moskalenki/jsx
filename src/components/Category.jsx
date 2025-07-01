import React from "react";

export default function Category({ q, index, onCategoryClick }) {
  return (
    <div
      onClick={() => onCategoryClick(q.title)}
      key={index}
      className="flex items-center h-[4.5rem] gap-4 p-4 bg-surface rounded-lg hover:bg-surface-hover cursor-pointer transition-colors lg:-w-[35.25rem] lg:min-h-[6.5rem]"
      style={{
        boxShadow: `0 16px 40px var(--color-surface-border)`,
      }}
    >
      <img src={q.icon} alt={`${q.title} icon`} className="w-8 h-8" />
      <span className="text-text-primary font-medium text-lg">{q.title}</span>
    </div>
  );
}
