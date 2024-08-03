import React from "react";
import UserBtnDropdown from "./UserBtnDropdown";
import Logo from "./Logo";
import MobileSidebarBtn from "./MobileSidebarBtn";
import WebPageMode from "./WebPageMode";
export default function NavBar({
  sideBarHandle,
  mobileSreenSideBarHandle,
  user,
  signOut,
}: any) {
  return (
    <nav className="fixed top-0 z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <MobileSidebarBtn
              mobileSreenSideBarHandle={mobileSreenSideBarHandle}
            />
            <Logo sideBarHandle={sideBarHandle} />
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3 relative">
              <WebPageMode />
              <UserBtnDropdown user={user} signOut={signOut} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
