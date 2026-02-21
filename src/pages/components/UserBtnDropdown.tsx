import React, { Fragment } from "react";
import {
   Dropdown,
   Avatar,
   DropdownHeader,
   DropdownItem,
   DropdownDivider,
} from "flowbite-react";
import userImg from "../../assets/images/user-img.jpg";
import NavLink from "../product/components/table/NavLink";

export default function UserBtnDropdown({ user, signOut }: any) {
   return (
      <Fragment>
         <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img={userImg} rounded />}
         >
            <DropdownHeader>
               <span className="block text-sm">{user.name}</span>
               <span className="block truncate text-sm font-medium">
                  {user.email}
               </span>
            </DropdownHeader>
            <DropdownItem className="p-0">
               <NavLink href="/dashboard">
                  <div className="py-2 px-4 w-full">Dashboard</div>
               </NavLink>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem onClick={() => signOut()}>Sign out</DropdownItem>
         </Dropdown>
      </Fragment>
   );
}
