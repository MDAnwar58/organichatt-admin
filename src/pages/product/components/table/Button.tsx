import React from "react";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  onClick?: any;
  className?: any;
  dataTooltipTarget?: any;
}

export default function Button({
  children,
  onClick,
  className,
  dataTooltipTarget,
}: Props) {
  return (
    <>
      <button
        type="button"
        data-tooltip-target={dataTooltipTarget}
        onClick={onClick}
        className={className}
      >
        {children}
      </button>
      <div
        id={dataTooltipTarget}
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Tooltip content
      </div>
    </>
  );
}
