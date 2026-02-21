import React, { useCallback, useEffect, useRef, useState } from "react";
import FormHeader from "../../components/FormHeader";
import Form from "../../components/Form";
import { useDispatch, useSelector } from "react-redux";
import TextEditor from "../../components/TextEditor";
import { clearDatas, getDatas } from "../apiCalling/action";
import axiosClient from "../../../axios-client";
import { successMsg } from "../../../notify";
import Input from "../../components/Input";
import { FaCross, FaCrosshairs } from "react-icons/fa";
import { PiCross } from "react-icons/pi";
import { MdDelete } from "react-icons/md";

const descriptionConfig = {
   readonly: false,
   height: 423,
   toolbarButtonSize: "large",
   placeholder: "",
   buttons: [
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "eraser",
      "|",
      "font",
      "fontsize",
      "paragraph",
      "|",
      "image",
      "video",
      "link",
      "|",
      "align",
      "undo",
      "redo",
      "copyformat",
      "|",
      "hr",
      "symbol",
      "fullsize",
      "preview",
      "print",
      "source",
   ],
};

type Form = {
   title: string;
   link: string;
};
type SocialLink = {
   id: number;
   title: string;
   link: string;
};

export default function SocialLinksForm() {
   const [addForm, setAddForm] = useState<HTMLFormElement | null>(null);
   const [updateForm, setUpdateForm] = useState<HTMLFormElement | null>(null);
   const [err, setErr] = useState<{}>({});
   const [updateErr, setUpdateErr] = useState<{}>({});
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getDatas() as any);
   }, [dispatch]);

   const onSubmit = async (e: any) => {
      e.preventDefault();
      try {
         setErr({});
         const formData = new FormData(e.currentTarget as HTMLFormElement);
         const response = await axiosClient.post(
            "/admin/social-link-store",
            formData
         );
         if (response.statusText === "OK") {
            if (addForm) {
               addForm?.reset();
            }
            // dispatch(clearDatas() as any);
            successMsg(response.data.msg);
            dispatch(getDatas() as any);
         }
      } catch (error) {
         setErr(error.response.data.errors);
      }
   };
   const onSubmitUpdate = async (e: any, id: number) => {
      e.preventDefault();
      try {
         setUpdateErr({});
         const formData = new FormData(e.currentTarget as HTMLFormElement);
         const response = await axiosClient.post(
            `/admin/social-link-update/${id}`,
            formData
         );
         if (response.statusText === "OK") {
            if (updateForm) {
               updateForm?.reset();
            }
            successMsg(response.data.msg);
            dispatch(getDatas() as any);
         }
      } catch (error) {
         setUpdateErr(error.response.data.errors);
      }
   };

   const deleteSocialLink = useCallback(
      async (id: number) => {
         try {
            const response = await axiosClient.get(
               `/admin/social-link-delete/${id}`
            );
            if (response.statusText === "OK") {
               if (updateForm) {
                  updateForm?.reset();
               }
               dispatch(clearDatas() as any);
               successMsg(response.data.msg);
               dispatch(getDatas() as any);
            }
         } catch (error) {
            console.error(error.response.data.errors);
         }
      },
      [dispatch]
   );

   const social_links = useSelector((state: any) => state.social_links);

   const error = err as Form;
   const update_error = updateErr as Form;

   return (
      <div className="grid 4/3lg:grid-cols-4 lg:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-5">
         {social_links?.length > 0
            ? social_links.map((social_link: SocialLink, i: number) => (
                 <div
                    key={i}
                    className=" relative pt-0  bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-md"
                 >
                    {/* <FormHeader title="Term & Condition Added" /> */}
                    <Form
                       onSubmit={(e) => onSubmitUpdate(e, social_link.id)}
                       formRef={(e: any) => setUpdateForm(e)}
                       className={"p-5"}
                    >
                       <div className="mb-5">
                          <Input
                             type="text"
                             name="title"
                             className="w-full rounded-lg border border-gray-300"
                             placeholder="Social Link Title"
                             Value={social_link.title}
                          />
                       </div>
                       <div className="mb-5">
                          <Input
                             type="text"
                             name="link"
                             className="w-full rounded-lg border border-gray-300"
                             placeholder="Social Link"
                             Value={social_link.link}
                          />
                       </div>

                       <div className=" text-end">
                          <button
                             type="submit"
                             className="text-md font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                             Update
                          </button>
                       </div>
                    </Form>
                    <button
                       type="button"
                       className="bg-red-500 text-white rounded p-1 text-lg absolute top-1 right-1"
                       onClick={() => deleteSocialLink(social_link?.id)}
                    >
                       <MdDelete />
                    </button>
                 </div>
              ))
            : null}
         <div className=" pt-0  bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-md">
            {/* <FormHeader title="Term & Condition Added" /> */}
            <Form
               onSubmit={onSubmit}
               formRef={(e: any) => setAddForm(e)}
               className={"p-5"}
            >
               <div className="mb-5">
                  <Input
                     type="text"
                     name="title"
                     className="w-full rounded-lg border border-gray-300"
                     placeholder="Social Link Title"
                  />
                  {error?.title && (
                     <small className="text-red-500 pt-1">{error?.title}</small>
                  )}
               </div>
               <div className="mb-5">
                  <Input
                     type="text"
                     name="link"
                     className="w-full rounded-lg border border-gray-300"
                     placeholder="Social Link"
                  />
                  {error?.link && (
                     <small className="text-red-500 pt-1">{error?.link}</small>
                  )}
               </div>

               <div className=" text-end">
                  <button
                     type="submit"
                     className="text-md font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                     Save
                  </button>
               </div>
            </Form>
         </div>
      </div>
   );
}
