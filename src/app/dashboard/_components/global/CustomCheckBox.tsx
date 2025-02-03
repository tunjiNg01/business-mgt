import React, { useState } from "react";
type Props = {
  label: string;
  onChange: (isChecked: boolean) => void;
};
const CustomCheckbox = ({ label, onChange }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <label className="flex cursor-pointer items-center space-x-3">
      <div
        className={`flex h-6 w-6 items-center justify-center rounded border-2 transition-colors ${
          isChecked ? "border-blue-600 bg-blue-600" : "border-gray-400 bg-white"
        }`}
        onClick={handleToggle}
      >
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        )}
      </div>
      {label && <span className="text-gray-700">{label}</span>}
    </label>
  );
};

export default CustomCheckbox;
