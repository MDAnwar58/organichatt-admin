import React, { useEffect, useRef, useState } from "react";
import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "./pages/components/NavBar";
import SideBar from "./pages/components/SideBar";
import useAuthCheck from "./auth/AuthCheck";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageOutlet from "./pages/components/PageOutlet";
import { Provider, useDispatch } from "react-redux";
import { getOrderCount } from "./pages/apiCalling/action";
import LoadOrderCount from "./pages/components/LoadOrderCount";
import store from "./pages/apiCalling/store";
import mainStore from "./main-store";

export default function Layout() {
   const { authCheck, auth, signOut } = useAuthCheck();
   // const [userBtnDropdown, setUserBtnDropdown] = useState(false);
   const [ecommerceDropDownBtn, setEcommerceBtnDropdown] = useState(false);
   const [galleryDropDownBtn, setGalleryBtnDropdown] = useState(false);
   const [websideCustomizeDropDownBtn, setWebsideCustomizeDropDownBtn] =
      useState(false);
   const [sideBar, setSideBar] = useState(true);
   const [mobileSreenSideBar, setMobileSreenSideBar] = useState(false);
   const dropdownRef = useRef(null);
   const { pathname } = useLocation();
   const navigate = useNavigate();

   // const userBtnDropdownHandle = () => {
   //   setUserBtnDropdown(!userBtnDropdown);
   // };

   const ecommerceBtnDropdownHandle = () => {
      setEcommerceBtnDropdown(!ecommerceDropDownBtn);
   };
   const galleryBtnDropdownHandle = () => {
      setGalleryBtnDropdown(!galleryDropDownBtn);
   };
   const websideCustomizeBtnDropdownHandle = () => {
      setWebsideCustomizeDropDownBtn(!websideCustomizeDropDownBtn);
   };

   const sideBarHandle = () => {
      setSideBar(!sideBar);
      localStorage.setItem("sidebar", String(!sideBar));
   };

   const mobileSreenSideBarHandle = () => {
      setMobileSreenSideBar(!mobileSreenSideBar);
   };

   // const handleClickOutside = (event) => {
   //   if (
   //     dropdownRef.current &&
   //     !dropdownRef.current.contains(event.target) &&
   //     event.pointerType !== "mouse"
   //   ) {
   //     setUserBtnDropdown(false);
   //   }
   // };

   useEffect(() => {
      authCheck();
      localStorage.setItem("sidebar", String(true));
      // document.addEventListener("moused  own", handleClickOutside);
      // return () => {
      //   document.removeEventListener("mousedown", handleClickOutside);
      // };
   }, []);

   if (
      auth?.user?.permission !== "allow" &&
      auth?.user?.role !== "super-admin"
   ) {
      return navigate("/");
   } else if (
      auth?.user?.permission !== "allow" &&
      auth?.user?.role !== "admin"
   ) {
      return navigate("/");
   } else {
      return (
         <Fragment>
            <div className="bg-white dark:bg-gray-900 min-h-screen">
               <NavBar
                  sideBarHandle={sideBarHandle}
                  mobileSreenSideBarHandle={mobileSreenSideBarHandle}
                  user={auth.user}
                  signOut={signOut}
               />
               {sideBar === true && (
                  <Provider store={store}>
                     <SideBar
                        ecommerceBtnDropdownHandle={ecommerceBtnDropdownHandle}
                        ecommerceDropDownBtn={ecommerceDropDownBtn}
                        galleryBtnDropdownHandle={galleryBtnDropdownHandle}
                        galleryDropDownBtn={galleryDropDownBtn}
                        mobileSreenSideBar={mobileSreenSideBar}
                        websideCustomizeDropDownBtn={
                           websideCustomizeDropDownBtn
                        }
                        websideCustomizeBtnDropdownHandle={
                           websideCustomizeBtnDropdownHandle
                        }
                     />
                  </Provider>
               )}
               <div className={`p-4 ${sideBar === true && "md:ml-64"}`}>
                  <PageOutlet sideBar={sideBar} />
               </div>
               {mobileSreenSideBar === true && (
                  <div
                     onClick={mobileSreenSideBarHandle}
                     drawer-backdrop=""
                     className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-[20]"
                  ></div>
               )}
            </div>
            <ToastContainer />
         </Fragment>
      );
   }
}
