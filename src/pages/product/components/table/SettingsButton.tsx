import React, { useEffect, useRef, useState } from "react";
import { CiSettings } from "react-icons/ci";

interface Props {
  filterBtn?: any;
  setFilterBtn?: any;
  pagination?: any;
  setPagination?: any;
  columnItems?: any;
  columns?: any;
  columnItemCount?: any;
  handleColumnStatusChange?: any;
}

export default function SettingsButton({
  filterBtn,
  setFilterBtn,
  pagination,
  setPagination,
  columnItems,
  columns,
  columnItemCount,
  handleColumnStatusChange,
}: Props) {
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

  const columnCount = columnItemCount > 0 ? columnItemCount : 2;
  return (
    <div className="flex ms-1 relative" ref={dropdownRef}>
      <button
        type="button"
        className="dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-100  dark:border-gray-800 text-2xl text-gray-700 px-2 rounded-xl shadow-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiSettings />
      </button>
      {isOpen === true && (
        <div
          className={`${
            isOpen === false && "hidden"
          } z-10 absolute top-12 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <div className="flex justify-between px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">
                <label
                  htmlFor="checkbox-item-1"
                  className="text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Filter Button
                </label>
                <input
                  id="checkbox-item-1"
                  type="checkbox"
                  onChange={() => {
                    setFilterBtn(!filterBtn);
                    localStorage.setItem("filter-btn", !filterBtn);
                  }}
                  checked={filterBtn}
                  className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
              </div>
            </li>
            <li>
              <div className="flex justify-between px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">
                <label
                  htmlFor="checkbox-item-1"
                  className="text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Paginate
                </label>
                <input
                  id="checkbox-item-1"
                  type="checkbox"
                  onChange={() => {
                    setPagination(
                      pagination === "paginate"
                        ? "next-privious-paginate"
                        : "paginate"
                    );
                    localStorage.setItem(
                      "pagination",
                      pagination === "paginate"
                        ? "next-privious-paginate"
                        : "paginate"
                    );
                  }}
                  checked={pagination === "paginate" ? true : false}
                  className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
              </div>
            </li>
          </ul>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {columnItems.length > 0 &&
              columnItems.map((column, index) => (
                <li key={index + 1}>
                  <div className="px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">
                    <label className="flex justify-between items-center cursor-pointer">
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                        {column.title}
                      </span>
                      <input
                        type="checkbox"
                        onChange={() => {
                          if (
                            columns.filter((col) => col.fieldStatus).length >
                              columnCount ||
                            !column.fieldStatus
                          ) {
                            handleColumnStatusChange(column.field);
                          }
                          // if (columns.length > 1) {
                          //   handleColumnStatusChange(column.field);
                          // }
                        }}
                        defaultChecked={column.fieldStatus}
                        disabled={
                          columns.length > columnCount
                            ? false
                            : column.fieldStatus == true && true
                        }
                        className="sr-only peer"
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                    </label>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
