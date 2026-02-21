import React, { Fragment, useEffect } from "react";
import TableHeader from "../../components/TableHeader";
import DataTable from "../../components/DataTable";
import UsersTableTBody from "./UsersTableTBody";
import LimitSelection from "./LimitSelection";
import { useSelector } from "react-redux";
import Column from "../../components/Column";
import useUsersContext from "../context/UsersContext";

export default function UsersContent() {
   const {
      getUsers,
      page,
      limit,
      totalPage,
      onPageHabdle,
      pageItemLimitHandler,
      selectItemId,
      itemHandle,
      loading,
      searchHandle,
      statusHandle,
      deleteHandle,
   } = useUsersContext();

   useEffect(() => {
      getUsers();
   }, []);

   const users = useSelector((state: any) => state.users);

   const filterItems = [
      {
         id: 1,
         name: "allow users",
      },
      {
         id: 2,
         name: "reject users",
      },
      {
         id: 3,
         name: "admins",
      },
      {
         id: 4,
         name: "employees",
      },
      {
         id: 5,
         name: "users",
      },
   ];

   const theadColumnName = [
      <Column name="#" />,
      <Column name="User Name" />,
      <Column name="Email" />,
      <Column name="Phone Number" />,
      <Column name="Status" />,
      <Column name="Action" />,
   ];

   const tbody = (
      <UsersTableTBody
         datas={users}
         loading={loading}
         statusHandle={statusHandle}
         deleteHandle={deleteHandle}
         page={page}
         limit={limit}
      />
   );
   const limitSelection = <LimitSelection onChange={pageItemLimitHandler} />;

   return (
      <Fragment>
         <TableHeader
            title="Users lists"
            link="/user-create"
            linkName="Create"
            linkClassName={"bg-blue-500 text-white px-5 py-1 rounded-xl"}
         />

         <DataTable
            theadColumnName={theadColumnName}
            tbody={tbody}
            page={page}
            limit={limit}
            totalPage={totalPage}
            onPageHabdle={onPageHabdle}
            limitSelection={limitSelection}
            search={true}
            filter={true}
            filterItems={filterItems}
            selectItemId={selectItemId}
            itemHandle={itemHandle}
            onChangeSearch={searchHandle}
         />
      </Fragment>
   );
}
