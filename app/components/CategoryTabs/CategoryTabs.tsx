import React from "react";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onSelect,
}) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap gap-8 flex max-w-full">
      {categories.map((category) => (
        <div
          key={category}
          onClick={() => onSelect(category)}
          className={`py-[10px] px-[30px] inline-block border-[1px] border-neutral-400 cursor-pointer hover:bg-black transition-all duration-300 hover:text-white ${
            activeCategory === category ? " text-white bg-black" : ""
          }`}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryTabs;
