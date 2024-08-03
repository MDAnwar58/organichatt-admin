import React from "react";
import { CheckIcon, FilterIcon } from "./Icons";
import DropdownBtn from "./DropdownBtn";

export default function Filter({
  children,
  filterItems,
  itemHandle,
  selectItemId,
  dropdownHeader,
  dropdownHeaderChildren,
}: {
  children?: any;
  filterItems?: any;
  itemHandle?: any;
  selectItemId?: any;
  dropdownHeader?: boolean;
  dropdownHeaderChildren?: any;
}) {
  return (
    <DropdownBtn
      arrowIcon={false}
      filterItems={filterItems}
      dropdown={true}
      placement="right-start"
      icon={<CheckIcon className={"me-2 text-green-500"} />}
      iconCheck={selectItemId}
      onClick={itemHandle}
      allFilters={true}
      dropdownHeader={dropdownHeader}
      dropdownHeaderChildren={dropdownHeaderChildren}
    >
      {children}
    </DropdownBtn>
  );
}
