import React from "react";
import { Dropdown, DropdownHeader, DropdownItem } from "flowbite-react";

export default function DropdownBtn({
  children,
  filterItems,
  arrowIcon,
  dropdown,
  dropdownHeader,
  dropdownHeaderChildren,
  placement,
  icon,
  iconCheck,
  onClick,
  allFilters,
}: {
  children?: any;
  filterItems?: any;
  arrowIcon?: any;
  dropdown?: any;
  dropdownHeader?: boolean;
  dropdownHeaderChildren?: any;
  placement?: any;
  icon?: any;
  iconCheck?: any;
  onClick?: any;
  allFilters?: boolean;
}) {
  return (
    <Dropdown
      arrowIcon={arrowIcon}
      label={children}
      placement={placement}
      inline
    >
      {dropdownHeader === true && (
        <DropdownHeader>
          <span className="block text-sm">{dropdownHeaderChildren}</span>
        </DropdownHeader>
      )}
      {allFilters === true && (
        <DropdownItem onClick={() => onClick("")}>
          {iconCheck === "" && icon} All
        </DropdownItem>
      )}
      {dropdown === true &&
        filterItems.map((item, index) => (
          <DropdownItem key={index} onClick={() => onClick(item.id)}>
            {item.id === iconCheck && icon} {item.name}
          </DropdownItem>
        ))}
    </Dropdown>
  );
}
