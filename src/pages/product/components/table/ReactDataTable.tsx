// import React, { Fragment, useRef, useState } from "react";
// import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
// import PaginationNextAndPrevious from "./PaginationNextAndPrevious";
// import PerPageLimit from "./PerPageLimit";
// import TableTop from "./TableTop";
// import NavLink from "./NavLink";
// import Button from "./Button";
// import ReactPagination from "./ReactPagination";
// import "../../assets/pagination.css";

// interface Props {
//   items?: any;
//   Columns?: any;
//   columnItemCount?: any;
//   actionColumn?: any;
//   viewHrefText?: string;
//   viewHrefLink?: string;
//   viewClassName?: string;
//   editHrefText?: any;
//   editHrefLink?: any;
//   editClassName?: any;
//   deleteButtonText?: any;
//   deleteButtonClassName?: any;
//   onDelete?: any;
//   selectedBox?: any;
//   onSelectAll?: any;
//   selectAllItem?: any;
//   onSelectItem?: any;
//   itemIds?: any;
//   onAllDelete?: any;
//   serialNo?: boolean;
//   onStatusChange?: any;
// }

// export default function ReactDataTable({
//   items,
//   Columns,
//   columnItemCount,
//   actionColumn,
//   viewHrefText,
//   viewHrefLink,
//   viewClassName,
//   editHrefText,
//   editHrefLink,
//   editClassName,
//   deleteButtonText,
//   deleteButtonClassName,
//   onDelete,
//   selectedBox,
//   onSelectAll,
//   selectAllItem,
//   onSelectItem,
//   itemIds,
//   onAllDelete,
//   serialNo,
//   onStatusChange,
// }: Props) {
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortColumn, setSortColumn] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [searchTerm, setSearchTerm] = useState("");
//   const searchInputRef = useRef(null);
//   // filter button hidden or show
//   const [filterBtn, setFilterBtn] = useState(
//     localStorage.getItem("filter-btn") === "true" ? true : false
//   );
//   // filter button hidden or show
//   const [pagination, setPagination] = useState(
//     localStorage.getItem("pagination") === "paginate"
//       ? "paginate"
//       : "next-privious-paginate"
//   );

//   // get field value from object
//   function getValueByField(obj, field, id) {
//     const value = field.split(".").reduce((o, i) => (o ? o[i] : null), obj);
//     // console.log(id);
//     // Check if the value is null
//     if (value === null) {
//       return "---";
//     }
//     // Check if the value is an array
//     if (Array.isArray(value)) {
//       // If the value is an array, join the items into a string for display
//       return (
//         value
//           .map((item) =>
//             item.color
//               ? item.color.name
//               : item.size
//               ? item.size.name
//               : item.size_number
//               ? item.size_number.name
//               : item.weight
//               ? item.weight.number
//               : ""
//           )
//           .join(", ") || "---"
//       );
//     }
//     // Check if the field is collection and the value is an object
//     if (field === "collection" && typeof value === "object" && value !== null) {
//       return value.name;
//     }
//     // Check if the field is collection and the value is an object
//     if (field === "brand" && typeof value === "object" && value !== null) {
//       return value.name;
//     }
//     // Check if the field is collection and the value is an object
//     if (field === "category" && typeof value === "object" && value !== null) {
//       return value.name;
//     }
//     // Check if the field is collection and the value is an object
//     if (
//       field === "sub_category" &&
//       typeof value === "object" &&
//       value !== null
//     ) {
//       return value.name;
//     }
//     // Check if the value is an image URL
//     if (field === "image_url" && typeof value === "string") {
//       return (
//         <img
//           src={value}
//           alt="Product"
//           className="w-16 h-16 rounded-lg mx-auto"
//         />
//       );
//     }
//     // Check if the value is an image URL
//     if (field === "status" && typeof value === "string") {
//       return (
//         <button
//           type="button"
//           className={` ${
//             value === "publish" ? "bg-green-500" : "bg-yellow-500"
//           } text-white text-sm px-3 rounded-xl`}
//           onClick={() => onStatusChange(id)}
//         >
//           {value === "publish" ? "Publish" : "Unpublish"}
//         </button>
//       );
//     }
//     // Check if the value is an object
//     if (typeof value === "object" && value !== null) {
//       return JSON.stringify(value);
//     }
//     return value;
//   }

//   // start
//   const getDatas = (items) => {
//     let datas = items;

//     if (searchTerm !== "") {
//       datas = datas.filter((dataRow) => {
//         return Object.values(dataRow).some((value) => {
//           if (value === null || value === undefined) return false;
//           return value
//             .toString()
//             .toLowerCase()
//             .includes(searchTerm.toString().toLowerCase());
//         });
//         // TODO: second way to search and get results or this method
//         // if (value === null || value === undefined) return false;
//         // return Object.keys(dataRow).some((key) => {
//         //   return dataRow[key]
//         //     .toString()
//         //     .toLowerCase()
//         //     .includes(searchTerm.toLowerCase());
//         // });
//       });
//     }

//     if (sortColumn !== "") {
//       datas = datas.sort((firstRow, otherRow) => {
//         const firstValue = getValueByField(firstRow, sortColumn);
//         const otherValue = getValueByField(otherRow, sortColumn);

//         if (firstValue === null) return 1;
//         if (otherValue === null) return -1;

//         return firstValue.toString().localeCompare(otherValue.toString());
//       });
//       if (sortOrder === "desc") {
//         datas = datas.reverse();
//       }
//     }
//     return datas;
//   };
//   // end

//   let datas = getDatas(items);

//   const startPoint = (currentPage - 1) * rowsPerPage;
//   const endPoint = currentPage * rowsPerPage;
//   const totalPages = Math.ceil(datas.length / rowsPerPage);

//   datas = datas.slice(startPoint, endPoint);

//   const [columns, setColumns] = useState(Columns);

//   const handleColumnStatusChange = (field) => {
//     setColumns((prevColumns) =>
//       prevColumns.map((column) =>
//         column.field === field
//           ? { ...column, fieldStatus: !column.fieldStatus }
//           : column
//       )
//     );
//   };

//   const filteredColumnItems = columns.filter((column) => column.fieldStatus);

//   const onPageHandle = (data) => {
//     setCurrentPage(data.selected + 1);
//   };

//   const onResetDataTable = (Items) => {
//     setCurrentPage(1);
//     if (searchInputRef.current) {
//       setSearchTerm("");
//       searchInputRef.current.value = "";
//     }
//     setRowsPerPage(5);
//     getDatas(Items);
//     setSortColumn(""); // Reset sort column
//     setSortOrder("asc"); // Reset sort order
//   };
//   return (
//     <Fragment>
//       <TableTop
//         setSearchTerm={setSearchTerm}
//         setCurrentPage={setCurrentPage}
//         totalPages={totalPages}
//         filterBtn={filterBtn}
//         setFilterBtn={setFilterBtn}
//         pagination={pagination}
//         setPagination={setPagination}
//         columns={filteredColumnItems}
//         columnItems={columns}
//         columnItemCount={columnItemCount}
//         handleColumnStatusChange={handleColumnStatusChange}
//         selectedBox={selectedBox}
//         onAllDelete={onAllDelete}
//         onResetDataTable={onResetDataTable}
//         items={items}
//         searchTerm={searchTerm}
//         searchInputRef={searchInputRef}
//       />
//       <div className=" relative overflow-x-auto overflow-y-hidden">
//         <table className=" bg-gray-100 dark:bg-gray-800 dark:text-white rounded-xl w-full">
//           <thead>
//             <tr>
//               {selectedBox && (
//                 <th className={` bg-slate-200 dark:bg-slate-700 rounded-s-xl `}>
//                   <input
//                     type="checkbox"
//                     className="w-4 h-4 mx-10"
//                     onChange={() => onSelectAll(datas)}
//                     checked={selectAllItem}
//                   />
//                 </th>
//               )}
//               {serialNo && !selectedBox && (
//                 <th
//                   className={` bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-800 rounded-s-xl `}
//                 >
//                   <input
//                     type="checkbox"
//                     className="w-4 h-4 rounded-md"
//                     onChange={() => onSelectAll(datas)}
//                     checked={selectAllItem}
//                   />
//                 </th>
//               )}
//               {filteredColumnItems.map((column, index) => (
//                 <th
//                   key={`column${column.field}`}
//                   className={` bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-800
//                 ${index + 1 === 1 && !selectedBox && "rounded-s-xl"}
//                 ${
//                   index + 1 === filteredColumnItems.length &&
//                   !actionColumn &&
//                   "rounded-e-xl"
//                 } hover:bg-slate-300 py-3 px-5 cursor-pointer`}
//                   onClick={() => {
//                     if (sortColumn === column.field) {
//                       if (sortOrder === "asc") {
//                         setSortOrder("desc");
//                       } else {
//                         setSortOrder("asc");
//                       }
//                     } else {
//                       setSortColumn(column.field);
//                       setSortOrder("asc");
//                     }
//                   }}
//                 >
//                   <div
//                     className={`flex justify-center items-center w-52
//                       ${index + 1 === 1 && !selectedBox && "rounded-s-xl"}
//                       ${
//                         index + 1 === filteredColumnItems.length &&
//                         !actionColumn &&
//                         "rounded-e-xl"
//                       } `}
//                   >
//                     {column.title}
//                     {sortColumn === column.field ? (
//                       sortOrder === "asc" ? (
//                         <div>
//                           <AiOutlineArrowDown />
//                         </div>
//                       ) : (
//                         <div>
//                           <AiOutlineArrowUp />
//                         </div>
//                       )
//                     ) : null}
//                   </div>
//                 </th>
//               ))}
//               {actionColumn === true && (
//                 <th
//                   className={` bg-slate-200 dark:bg-slate-700 rounded-e-xl pe-10`}
//                 >
//                   Action
//                 </th>
//               )}
//             </tr>
//           </thead>
//           <tbody className=" text-center">
//             {datas.length > 0 ? (
//               datas.map((dataRow, index) => (
//                 <tr
//                   key={`data${index + 1}`}
//                   className="hover:bg-gray-200 hover:rounded-md dark:hover:bg-gray-900"
//                 >
//                   {selectedBox && (
//                     <td className="py-2 px-3">
//                       <input
//                         type="checkbox"
//                         className="w-5 h-5 rounded-md"
//                         onChange={() => onSelectItem(dataRow.id, datas)}
//                         checked={selectAllItem || itemIds.includes(dataRow.id)}
//                       />
//                     </td>
//                   )}
//                   {serialNo && !selectedBox && (
//                     <td className="py-2 px-3">{index + 1}</td>
//                   )}
//                   {filteredColumnItems.map((column) => (
//                     <td
//                       key={`column-field${column.field}`}
//                       className=" py-2 px-5"
//                     >
//                       {getValueByField(dataRow, column.field, dataRow.id)}
//                       {/* {console.log(dataRow.id)} */}
//                       {/* {console.log(column.field)} */}
//                       {/* {console.log(dataRow[column.field])} */}
//                     </td>
//                   ))}
//                   {actionColumn === true && (
//                     <td className="py-2 pe-10">
//                       {actionColumn === true && viewHrefText && (
//                         <NavLink href={viewHrefLink} className={viewClassName}>
//                           {viewHrefText}
//                         </NavLink>
//                       )}

//                       {actionColumn === true && editHrefText && (
//                         <NavLink
//                           href={editHrefLink + dataRow.id}
//                           className={editClassName}
//                         >
//                           {editHrefText}
//                         </NavLink>
//                       )}
//                       {actionColumn === true && deleteButtonText && (
//                         <Button
//                           onClick={() => onDelete(dataRow.id)}
//                           className={deleteButtonClassName}
//                         >
//                           {deleteButtonText}
//                         </Button>
//                       )}
//                     </td>
//                   )}
//                 </tr>
//               ))
//             ) : (
//               <tr className="text-center">
//                 <td colSpan={filteredColumnItems.length + 2} className="py-2">
//                   data not found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//       <footer className=" flex justify-between items-center pt-3">
//         <PerPageLimit
//           setRowsPerPage={setRowsPerPage}
//           rowsPerPage={rowsPerPage}
//         />
//         {pagination === "paginate" ? (
//           <ReactPagination
//             onPageHandle={onPageHandle}
//             totalPages={totalPages}
//             currentPage={currentPage}
//           />
//         ) : (
//           <PaginationNextAndPrevious
//             currentPage={currentPage}
//             setCurrentPage={setCurrentPage}
//             totalPages={totalPages}
//           />
//         )}
//       </footer>
//     </Fragment>
//   );
// }

import React, { Fragment, useRef, useState, useEffect } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import PaginationNextAndPrevious from "./PaginationNextAndPrevious";
import PerPageLimit from "./PerPageLimit";
import TableTop from "./TableTop";
import NavLink from "./NavLink";
import Button from "./Button";
import ReactPagination from "./ReactPagination";
import "../../assets/pagination.css";
import { PlusIcon, ViewGridAddIcon } from "../../../components/Icons";
import Image from "../../../components/Image";

interface Props {
  items?: any;
  Columns?: any;
  columnItemCount?: any;
  actionColumn?: any;
  viewHrefText?: string;
  viewHrefLink?: string;
  viewClassName?: string;
  editHrefText?: any;
  editHrefLink?: any;
  editClassName?: any;
  deleteButtonText?: any;
  deleteButtonClassName?: any;
  onDelete?: any;
  selectedBox?: any;
  onSelectAll?: any;
  selectAllItem?: any;
  onSelectItem?: any;
  itemIds?: any;
  onAllDelete?: any;
  serialNo?: boolean;
  onStatusChange?: any;
  tableFilterItems?: any;
  clearTableFilter?: any;
  onImagesHandle?: any;
  perPageLimit?: any;
  setGalleryImages?: any;
}

export default function ReactDataTable({
  items,
  Columns,
  columnItemCount,
  actionColumn,
  viewHrefText,
  viewHrefLink,
  viewClassName,
  editHrefText,
  editHrefLink,
  editClassName,
  deleteButtonText,
  deleteButtonClassName,
  onDelete,
  selectedBox,
  onSelectAll,
  selectAllItem,
  onSelectItem,
  itemIds,
  onAllDelete,
  serialNo,
  onStatusChange,
  tableFilterItems,
  clearTableFilter,
  onImagesHandle,
  perPageLimit,
  setGalleryImages,
}: Props) {
  const [rowsPerPage, setRowsPerPage] = useState(perPageLimit);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(items); // Add this state
  const searchInputRef = useRef(null);
  // filter button hidden or show
  const [filterBtn, setFilterBtn] = useState(
    localStorage.getItem("filter-btn") === "true" ? true : false
  );
  // filter button hidden or show
  const [pagination, setPagination] = useState(
    localStorage.getItem("pagination") === "paginate"
      ? "paginate"
      : "next-privious-paginate"
  );

  // get field value from object
  function getValueByField(obj, field, id) {
    const value = field.split(".").reduce((o, i) => (o ? o[i] : null), obj);
    if (value === null) {
      return "---";
    }
    if (Array.isArray(value)) {
      return (
        value
          .map((item) =>
            item.color
              ? item.color.name
              : item.size
              ? item.size.name
              : item.size_number
              ? item.size_number.name
              : item.weight
              ? item.weight.number
              : ""
          )
          .join(", ") || "---"
      );
    }
    if (field === "collection" && typeof value === "object" && value !== null) {
      return value.name;
    }
    if (field === "brand" && typeof value === "object" && value !== null) {
      return value.name;
    }
    if (field === "category" && typeof value === "object" && value !== null) {
      return value.name;
    }
    if (
      field === "sub_category" &&
      typeof value === "object" &&
      value !== null
    ) {
      return value.name;
    }
    if (field === "image_url" && typeof value === "string") {
      return (
        <img
          src={value}
          alt="Product"
          className="w-16 h-16 rounded-lg mx-auto"
        />
      );
    }
    if (field === "status" && typeof value === "string") {
      return (
        <button
          type="button"
          className={` ${
            value === "publish" ? "bg-green-500" : "bg-yellow-500"
          } text-white text-sm px-3 rounded-xl`}
          onClick={() => onStatusChange(id)}
        >
          {value === "publish" ? "Publish" : "Unpublish"}
        </button>
      );
    }
    if (field === "images") {
      return (
        <div className="flex">
          {obj.product_images && obj.product_images.length > 0 && (
            <div className="flex -space-x-4 rtl:space-x-reverse justify-center">
              {obj.product_images.slice(0, 3).map((image) => (
                <Image
                  key={image.id}
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src={image.image_url}
                  alt="Product Image"
                />
              ))}

              {obj.product_images.length > 3 && (
                <a
                  className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                  href="#"
                >
                  +{obj.product_images.length - 3}
                </a>
              )}
            </div>
          )}

          <div className="flex items-center">
            <button
              type="button"
              className="text-gray-400 bg-gray-200 hover:bg-slate-300 hover:text-gray-700 p-1 ms-3 rounded-md drop-shadow-sm border border-1 border-gray-200"
              onClick={() => onImagesHandle(id)}
            >
              {/* <PlusIcon /> */}
              <ViewGridAddIcon />
            </button>
          </div>
        </div>
      );
    }
    if (typeof value === "object" && value !== null) {
      return JSON.stringify(value);
    }
    return value;
  }

  const getDatas = (items) => {
    let datas = items;

    if (searchTerm !== "") {
      datas = datas.filter((dataRow) => {
        return Object.values(dataRow).some((value) => {
          if (value === null || value === undefined) return false;
          return value
            .toString()
            .toLowerCase()
            .includes(searchTerm.toString().toLowerCase());
        });
      });
    }

    if (sortColumn !== "") {
      datas = datas.sort((firstRow, otherRow) => {
        const firstValue = getValueByField(firstRow, sortColumn);
        const otherValue = getValueByField(otherRow, sortColumn);

        if (firstValue === null) return 1;
        if (otherValue === null) return -1;

        return firstValue.toString().localeCompare(otherValue.toString());
      });
      if (sortOrder === "desc") {
        datas = datas.reverse();
      }
    }
    return datas;
  };

  useEffect(() => {
    setFilteredData(getDatas(items));
  }, [items, searchTerm, sortColumn, sortOrder, currentPage, rowsPerPage]);

  const startPoint = (currentPage - 1) * rowsPerPage;
  const endPoint = currentPage * rowsPerPage;
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const displayedData = filteredData.slice(startPoint, endPoint);

  const [columns, setColumns] = useState(Columns);

  const handleColumnStatusChange = (field) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.field === field
          ? { ...column, fieldStatus: !column.fieldStatus }
          : column
      )
    );
  };

  const filteredColumnItems = columns.filter((column) => column.fieldStatus);

  const onPageHandle = (data) => {
    setCurrentPage(data.selected + 1);
  };

  const onResetDataTable = () => {
    setCurrentPage(1);
    setRowsPerPage(perPageLimit);
    setSortColumn("");
    setSortOrder("asc");
    setSearchTerm("");
    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }
    setFilteredData(getDatas(items)); // Update the state to refresh data
    clearTableFilter();
  };

  return (
    <Fragment>
      <TableTop
        setSearchTerm={setSearchTerm}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        filterBtn={filterBtn}
        setFilterBtn={setFilterBtn}
        tableFilterItems={tableFilterItems}
        pagination={pagination}
        setPagination={setPagination}
        columns={filteredColumnItems}
        columnItems={columns}
        columnItemCount={columnItemCount}
        handleColumnStatusChange={handleColumnStatusChange}
        selectedBox={selectedBox}
        onAllDelete={onAllDelete}
        onResetDataTable={onResetDataTable}
        items={items}
        searchTerm={searchTerm}
        searchInputRef={searchInputRef}
      />
      <div className="relative overflow-x-auto overflow-y-hidden">
        <table className="bg-gray-100 dark:bg-gray-800 dark:text-white rounded-xl w-full">
          <thead>
            <tr>
              {selectedBox && (
                <th className="bg-slate-200 dark:bg-slate-700 rounded-s-xl">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mx-10"
                    onChange={() => onSelectAll(displayedData)}
                    checked={selectAllItem}
                  />
                </th>
              )}
              {serialNo && !selectedBox && (
                <th className="bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-800 rounded-s-xl">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded-md"
                    onChange={() => onSelectAll(displayedData)}
                    checked={selectAllItem}
                  />
                </th>
              )}
              {filteredColumnItems.map((column, index) => (
                <th
                  key={`column${column.field}`}
                  className={`bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-800 ${
                    index + 1 === 1 && !selectedBox && "rounded-s-xl"
                  } ${
                    index + 1 === filteredColumnItems.length &&
                    !actionColumn &&
                    "rounded-e-xl"
                  } hover:bg-slate-300 py-3 px-5 cursor-pointer`}
                  onClick={() => {
                    if (sortColumn === column.field) {
                      if (sortOrder === "asc") {
                        setSortOrder("desc");
                      } else {
                        setSortOrder("asc");
                      }
                    } else {
                      setSortColumn(column.field);
                      setSortOrder("asc");
                    }
                  }}
                >
                  <div
                    className={`flex justify-center items-center w-52 ${
                      index + 1 === 1 && !selectedBox && "rounded-s-xl"
                    } ${
                      index + 1 === filteredColumnItems.length &&
                      !actionColumn &&
                      "rounded-e-xl"
                    }`}
                  >
                    {column.title}
                    {sortColumn === column.field ? (
                      sortOrder === "asc" ? (
                        <span>
                          <AiOutlineArrowDown />
                        </span>
                      ) : (
                        <span>
                          <AiOutlineArrowUp />
                        </span>
                      )
                    ) : null}
                  </div>
                </th>
              ))}
              {actionColumn === true && (
                <th className="bg-slate-200 dark:bg-slate-700 rounded-e-xl pe-10">
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody className="text-center">
            {displayedData.length > 0 ? (
              displayedData.map((dataRow, index) => (
                <tr
                  key={`data${index + 1}`}
                  className="hover:bg-gray-200 hover:rounded-md dark:hover:bg-gray-900"
                >
                  {selectedBox && (
                    <td className="py-2 px-3">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded-md"
                        onChange={() => onSelectItem(dataRow.id, displayedData)}
                        checked={selectAllItem || itemIds.includes(dataRow.id)}
                      />
                    </td>
                  )}
                  {serialNo && !selectedBox && (
                    <td className="py-2 px-3">{index + 1}</td>
                  )}
                  {filteredColumnItems.map((column) => (
                    <td
                      key={`column-field${column.field}`}
                      className="py-2 px-5"
                    >
                      {getValueByField(dataRow, column.field, dataRow.id)}
                    </td>
                  ))}
                  {actionColumn === true && (
                    <td className="py-2 pe-10">
                      {actionColumn === true && viewHrefText && (
                        <NavLink href={viewHrefLink} className={viewClassName}>
                          {viewHrefText}
                        </NavLink>
                      )}

                      {actionColumn === true && editHrefText && (
                        <NavLink
                          href={editHrefLink + dataRow.id}
                          className={editClassName}
                        >
                          {editHrefText}
                        </NavLink>
                      )}
                      {actionColumn === true && deleteButtonText && (
                        <Button
                          onClick={() => onDelete(dataRow.id)}
                          className={deleteButtonClassName}
                        >
                          {deleteButtonText}
                        </Button>
                      )}
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr className="text-center">
                <td colSpan={filteredColumnItems.length + 2} className="py-2">
                  data not found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <footer className="flex justify-between items-center pt-3">
        <PerPageLimit
          perPageLimit={perPageLimit}
          setRowsPerPage={setRowsPerPage}
          rowsPerPage={rowsPerPage}
          totalPageLangth={filteredData.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        {pagination === "paginate" ? (
          <ReactPagination
            onPageHandle={onPageHandle}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        ) : (
          <PaginationNextAndPrevious
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        )}
      </footer>
    </Fragment>
  );
}
