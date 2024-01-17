import { useRouter } from "next/navigation";
import React from "react";
import Button from "../Button";

interface EmptyItemsProps {
  title: string;
  showReset?: boolean;
  setReset?: () => void;
}

const EmptyItems: React.FC<EmptyItemsProps> = ({
  title,
  showReset,
  setReset,
}) => {
  const router = useRouter();
  return (
    <div
      className="
        h-[20vh]
        flex
        max-w-full
        flex-col 
        gap-2 
        justify-center 
        items-center 
      "
    >
      <span className="text-2xl font-medium">{title}</span>
      <div className="w-48 mt-6">
        {showReset && <Button title="Remove all filters" onClick={setReset} />}
      </div>
    </div>
  );
};

export default EmptyItems;
