import React from "react";

export default function LimitSelection({
  onChange,
  inputRef,
}: {
  onChange?: any;
  inputRef?: any;
}) {
  return (
    <select
      onChange={onChange}
      ref={inputRef}
      className="w-16 rounded-lg border-1 border-gray-300 text-gray-500"
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="50">50</option>
    </select>
  );
}
