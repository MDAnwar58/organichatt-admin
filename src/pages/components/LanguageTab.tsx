import React from "react";
import EnFlag from "./CountryFlag";

export default function LanguageTab({ setLanguage, language }) {
  return (
    <ul className="flex gap-3 px-5 pt-1 border-b text-gray-500">
      <li
        className={`${
          language === "english" && "text-blue-500 border-b-2 border-blue-700"
        }`}
      >
        <button type="button" onClick={() => setLanguage("english")}>
          <EnFlag
            countryCode="us"
            width="1em"
            height=".9em"
            title="US"
            ariaLabel="United States"
            className="me-1"
          />
          English
        </button>
      </li>
      <li
        className={`${
          language === "bangla" && "text-blue-500 border-b-2 border-blue-700"
        }`}
      >
        <button type="button" onClick={() => setLanguage("bangla")}>
          <EnFlag
            countryCode="bd"
            width="1em"
            height=".9em"
            title="BD"
            ariaLabel="Bangladesh"
            className="me-1"
          />
          Bangla
        </button>
      </li>
    </ul>
  );
}
