import React, { Fragment } from "react";
import {
  Dropdown,
  Avatar,
  DropdownHeader,
  DropdownItem,
  DropdownDivider,
} from "flowbite-react";
import userImg from "../../assets/images/user-img.jpg";

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
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownDivider />
        <DropdownItem onClick={() => signOut()}>Sign out</DropdownItem>
      </Dropdown>
    </Fragment>
  );
}
