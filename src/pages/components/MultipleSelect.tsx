import React from "react";
import ToogleCheckBox from "./ToogleCheckBox";
import { SquareCheckIcon, SquarePlusIcon } from "./Icons";

interface Props {
  label?: any;
  size?: any;
  items?: any;
  disabled?: boolean;
  onChangeToogleCheck?: any;
  defaultChecked?: any;
  detectOptionWithlabel?: any;
  inputRef?: any;
  onChange?: any;
  onClick?: any;
  ids?: any;
}

export default function MultipleSelect({
  label,
  size,
  items,
  disabled,
  onChangeToogleCheck,
  defaultChecked,
  detectOptionWithlabel,
  inputRef,
  onChange,
  onClick,
  ids,
}: Props) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <label
          htmlFor={detectOptionWithlabel}
          className="block mb-2 text-xl font-medium text-gray-500 dark:text-white"
        >
          {label}
        </label>

        <ToogleCheckBox
          onChange={onChangeToogleCheck}
          defaultChecked={defaultChecked}
        />
      </div>
      <select
        disabled={disabled}
        id={detectOptionWithlabel}
        size={size}
        className={`${
          disabled
            ? "bg-gray-300 dark:bg-gray-500"
            : "bg-gray-50 dark:bg-gray-200"
        } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        ref={inputRef}
      >
        {/* <option value="" className=" bg-[#0078D7]">
          choose
        </option> */}
        {items.length > 0 ? (
          items.map((item) => (
            <option
              key={item.id}
              value={item.id}
              onClick={() => onClick(String(item.id))}
              onChange={onChange}
              className="flex items-center justify-between"
            >
              {item.number ? item.number : item.name}
              {item.weight && item.weight}
              {ids.includes(String(item.id)) ? (
                <SquareCheckIcon className="text-xl" />
              ) : (
                <SquarePlusIcon className="text-xl" />
              )}
            </option>
          ))
        ) : (
          <option className=" text-gray-600 text-xl font-medium">
            Data not found
          </option>
        )}
      </select>
    </div>
  );
}
