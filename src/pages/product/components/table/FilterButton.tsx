import React, { useEffect, useRef, useState } from "react";
import { CiFilter } from "react-icons/ci";

interface Props {
  tableFilterItems?: any;
}

export default function FilterButton({ tableFilterItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex me-1 relative" ref={dropdownRef}>
      <button
        type="button"
        className="bg-gray-50 dark:bg-gray-700 dark:text-white border border-gray-100 dark:border-gray-800 text-2xl text-gray-700 px-2 rounded-xl shadow-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiFilter />
      </button>
      {isOpen === true && (
        <div
          className={`${
            isOpen === false && "hidden"
          } z-10 absolute top-12 left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {tableFilterItems.length > 0 ? (
              tableFilterItems.map((item) => (
                <li key={item.id}>
                  <span className="block px-4 py-2 bg-white dark:bg-gray-500 dark:text-white">
                    {item.filter}
                  </span>
                </li>
              ))
            ) : (
              <li>
                <span className="block px-4 py-2 bg-white dark:bg-gray-500 dark:text-white">
                  Filter not found
                </span>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
