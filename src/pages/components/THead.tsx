import React from "react";

export default function THead({ theadColumnName }: any) {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {theadColumnName.map((columnName, index) => (
          <th key={index} scope="col" className=" text-center">
            {columnName}
          </th>
        ))}
      </tr>
    </thead>
  );
}
