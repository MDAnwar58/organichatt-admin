import React from "react";
import { Dropdown, DropdownHeader, DropdownItem } from "flowbite-react";
import { convertToTextCase } from "./trancute";

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
   dropdownItemClassName,
   more = false,
   filter = true,
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
   dropdownItemClassName?: string;
   more?: boolean;
   filter?: boolean;
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
            <DropdownItem
               onClick={() => {
                  if (more === false) {
                     onClick("");
                  }
               }}
               className={dropdownItemClassName}
            >
               {iconCheck === "" && icon} All
            </DropdownItem>
         )}
         {dropdown === true &&
            filterItems.map((item, index) => (
               <DropdownItem
                  key={index}
                  onClick={() => {
                     if (more === false) {
                        onClick(item.id);
                     }
                  }}
                  className={dropdownItemClassName}
               >
                  {item.id === iconCheck && icon}{" "}
                  {filter === true ? convertToTextCase(item?.name) : item?.name}
               </DropdownItem>
            ))}
      </Dropdown>
   );
}
