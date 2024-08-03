import React from "react";

interface Props {
  label?: any;
  idWithDetectLabel?: any;
  inputRef?: any;
  defaultValue?: any;
  defaultChecked?: boolean;
  onChange?: any;
}

export default function InputRadio({
  label,
  idWithDetectLabel,
  inputRef,
  defaultValue,
  defaultChecked,
  onChange,
}: Props) {
  return (
    <div className="flex items-center pt-2">
      <input
        id={idWithDetectLabel}
        type="radio"
        defaultValue={defaultValue}
        defaultChecked={defaultChecked}
        ref={inputRef}
        onChange={onChange}
        name="default-radio"
        className="p-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={idWithDetectLabel}
        className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
}
