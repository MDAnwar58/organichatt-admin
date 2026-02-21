import React, { useCallback, useEffect, useRef, useState } from "react";
import FormHeader from "../../components/FormHeader";
import Form from "../../components/Form";
import { useDispatch, useSelector } from "react-redux";
import TextEditor from "../../components/TextEditor";
import { getData } from "../apiCalling/action";
import axiosClient from "../../../axios-client";
import { successMsg } from "../../../notify";

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

export default function TermsAndConditionForm() {
   const [termsAndConditionId, setTermsAndConditionId] = useState<
      number | null
   >(null);
   const [editorValue, setEditorValue] = useState("");
   const des = useRef(null);
   const [err, setErr] = useState<boolean>(false);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getData() as any);
   }, [dispatch]);

   const onSubmit = useCallback(async () => {
      const editorValue = des?.current ? des?.current?.value : "";
      if (!editorValue || editorValue.trim() === "<p><br></p>") {
         setErr(true);
      } else {
         const payload = {
            id: termsAndConditionId,
            content: editorValue,
         };
         setErr(false);
         const response = await axiosClient.post(
            "/admin/terms-and-condition-store",
            payload
         );
         if (response.statusText === "OK") {
            successMsg(response.data.msg);
            dispatch(getData() as any);
         }
      }
   }, [termsAndConditionId, des, dispatch]);

   const errors = useSelector((state: any) => state.errors);
   const terms_and_condition = useSelector(
      (state: any) => state.terms_and_condition
   );

   useEffect(() => {
      if (terms_and_condition.id) {
         setEditorValue(terms_and_condition.content);
         setTermsAndConditionId(terms_and_condition.id);
      }
   }, [terms_and_condition.id, terms_and_condition.content]);

   return (
      <div className="mx-auto w-full pt-0  bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-md my-5">
         <FormHeader title="Term & Condition Added" />
         <Form className={"p-5"}>
            <div className="mb-5">
               <TextEditor
                  config={descriptionConfig}
                  textEditorRef={des}
                  value={editorValue}
               />
               {err === true && (
                  <small className="text-red-500 pt-1">
                     Please enter the privacy policy content...
                  </small>
               )}
            </div>

            <div className=" text-end">
               <button
                  type="button"
                  className="text-md font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={onSubmit}
               >
                  Save & Changes
               </button>
            </div>
         </Form>
      </div>
   );
}
