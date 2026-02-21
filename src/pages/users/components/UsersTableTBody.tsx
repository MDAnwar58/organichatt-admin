import React from "react";
import { Link } from "react-router-dom";
import DataNotFound from "../../components/DataNotFound";
import Loading from "../../components/Loading";

type User = {
   id: number;
   name: string;
   email: string;
   email_verified_at: string | null;
   avatar: string | null;
   permission: "allow" | "reject";
   phone_number: string;
   role: string;
   created_at: string | null;
};

export default function UsersTableTBody({
   datas,
   loading,
   statusHandle,
   deleteHandle,
   page,
   limit,
}: {
   datas?: any;
   loading?: boolean;
   statusHandle?: any;
   deleteHandle?: any;
   page?: any;
   limit?: any;
}) {
   return (
      <tbody>
         {datas.length > 0 ? (
            datas.map((user: User, index: number) => (
               <tr
                  key={index + 1 + (page - 1) * limit}
                  className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
               >
                  <td className="px-6 py-4">
                     {" "}
                     {index + 1 + (page - 1) * limit}
                  </td>
                  <td
                     scope="row"
                     className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                     <div className="flex flex-row gap-2 justify-center items-center">
                        {user.avatar ? (
                           <img
                              src={user.avatar}
                              alt="avatar"
                              className="w-10 h-10 rounded-full"
                           />
                        ) : (
                           <img
                              src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
                              alt="avatar"
                              className="w-10 h-10 rounded-full"
                           />
                        )}
                        <span>{user.name}</span>
                     </div>
                  </td>
                  <td
                     scope="row"
                     className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                     {user.email ?? "---"}
                  </td>
                  <td
                     scope="row"
                     className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                     {user.phone_number ?? "---"}
                  </td>
                  <td className="px-6 py-4">
                     {user.permission === "allow" ? (
                        <small
                           onClick={() => statusHandle(user.id)}
                           className=" bg-red-400 text-white rounded-xl text-sm font-semibold px-3 pb-[.15rem] cursor-pointer"
                        >
                           Reject
                        </small>
                     ) : (
                        <small
                           onClick={() => statusHandle(user.id)}
                           className=" bg-green-300 text-white rounded-xl text-sm font-semibold px-3 pb-[.15rem] cursor-pointer"
                        >
                           Allow
                        </small>
                     )}
                  </td>
                  <td className="px-6 py-4">
                     <Link
                        to={`/user-edit/${user.id}`}
                        className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
                     >
                        Edit
                     </Link>
                     <button
                        type="button"
                        onClick={() => deleteHandle(user.id)}
                        className=" font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                     >
                        Delete
                     </button>
                  </td>
               </tr>
            ))
         ) : loading === true ? (
            <Loading colSpan={6} height={20} />
         ) : (
            <DataNotFound colSpan={6} />
         )}
      </tbody>
   );
}
