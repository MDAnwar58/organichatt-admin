import React, { useCallback, useEffect, useState } from "react";
import FormHeader from "../../../components/FormHeader";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getData, updateData } from "../../apiCalling/action";

export default function UserEditForm() {
   const { id } = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [userRole, setUserRole] = useState("");

   useEffect(() => {
      dispatch(getData(Number(id)) as any);
   }, [id]);

   const updateHandle = useCallback(
      (e: React.FormEvent<HTMLFormElement>, id: number) => {
         e.preventDefault();
         const formData = new FormData(e.target as HTMLFormElement); // Corrected
         dispatch(updateData(id, formData, navigate) as any);
      },
      [dispatch, navigate]
   );

   const user = useSelector((state: any) => state.user);
   const errors = useSelector((state: any) => state.errors);

   useEffect(() => {
      if (user?.role) {
         setUserRole(user.role);
      }
   }, [user]);

   return (
      <div className="mx-auto 2xl:w-4/12 xl:w-5/12 lg:w-6/12 sm:w-8/12 w-full pt-0  bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-md mt-28">
         <FormHeader title="User Edit" />
         <Form
            onSubmit={(e) => updateHandle(e, Number(id))}
            // formRef={form}
            className={"p-5"}
         >
            <div className="mb-5">
               <select
                  name="role"
                  className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={userRole || ""}
                  onChange={(e) => setUserRole(e.target.value)}
               >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="employee">Employee</option>
               </select>
               {errors?.role && (
                  <small className=" text-red-500 px-3">{errors?.role}</small>
               )}
            </div>
            <div className="mb-5">
               <Input
                  type="text"
                  name="name"
                  className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="User name"
                  error={errors.name}
                  Value={user.name}
               />
            </div>
            <div className="mb-5">
               <Input
                  type="email"
                  name="email"
                  className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  error={errors.email}
                  Value={user.email}
               />
            </div>
            <div className="mb-5">
               <Input
                  type="number"
                  className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="phone_number"
                  placeholder="phone Number"
                  error={errors.phone_number}
                  Value={user.phone_number}
               />
            </div>
            <div className="mb-5">
               <Input
                  type="file"
                  name="avatar"
                  className="px-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Avatar"
                  error={errors.avatar}
               />
            </div>

            <div className="mb-5">
               <Input
                  type="password"
                  className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="password"
                  placeholder="Password"
                  error={errors.password}
               />
            </div>
            <div className="mb-5">
               <Input
                  type="password"
                  className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="password_confirmation"
                  placeholder="password Confirmation"
               />
            </div>

            <div className=" text-end">
               <button
                  type="submit"
                  className="text-md font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               >
                  Update
               </button>
            </div>
         </Form>
      </div>
   );
}
