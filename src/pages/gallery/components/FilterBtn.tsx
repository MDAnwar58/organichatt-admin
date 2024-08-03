import React from "react";
import { CheckIcon, FilterIcon } from "../../components/Icons";
import DropdownBtn from "../../components/DropdownBtn";

export default function FilterBtn({
  galleryCategories,
  itemHandle,
  selectItemId,
}: any) {
  return (
    <DropdownBtn
      arrowIcon={false}
      filterItems={galleryCategories}
      dropdown={true}
      placement="right-start"
      icon={<CheckIcon className={"me-2 text-green-500"} />}
      iconCheck={selectItemId}
      onClick={itemHandle}
      allFilters={true}
    >
      <span className="px-2 h-8 flex items-center text-xl uppercase font-semibold text-gray-700 dark:text-white bg-white dark:bg-gray-700 border border-gray-200 rounded-md">
        <FilterIcon />
      </span>
    </DropdownBtn>
  );
}
