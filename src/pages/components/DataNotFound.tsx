import React from "react";

export default function DataNotFound({ colSpan }: any) {
  return (
    <tr>
      <td
        colSpan={colSpan}
        className="text-center py-3 dark:bg-gray-800 text-2xl font-semibold"
      >
        Data not found
      </td>
    </tr>
  );
}
