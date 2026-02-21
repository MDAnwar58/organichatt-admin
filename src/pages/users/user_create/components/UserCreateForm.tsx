import React from "react";
import FormHeader from "../../../components/FormHeader";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import { useSelector } from "react-redux";
import useCollectionCreateContext from "../context/CollectionCreateContext";

export default function UserCreateForm() {
   const { form, addHandle } = useCollectionCreateContext();

   const errors = useSelector((state: any) => state.errors);
   return (
      <div className="mx-auto 2xl:w-4/12 xl:w-5/12 lg:w-6/12 sm:w-8/12 w-full pt-0  bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-md mt-28">
         <FormHeader title="User Added" />
         <Form onSubmit={addHandle} formRef={form} className={"p-5"}>
            <div className="mb-5">
               <select
                  name="role"
                  className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
               />
            </div>
            <div className="mb-5">
               <Input
                  type="email"
                  name="email"
                  className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  error={errors.email}
               />
            </div>
            <div className="mb-5">
               <Input
                  type="number"
                  className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="phone_number"
                  placeholder="phone Number"
                  error={errors.phone_number}
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
                  Save
               </button>
            </div>
         </Form>
      </div>
   );
}
