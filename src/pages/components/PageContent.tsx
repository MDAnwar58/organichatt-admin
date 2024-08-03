import React from "react";

export default function PageContent({ children }: any) {
  return (
    <div
      className={`p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-16`}
    >
      {children}
    </div>
  );
}
