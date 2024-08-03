import React, { Fragment } from "react";
import TableHeader from "./TableHeader";
import Table from "./Table";
import THead from "./THead";
import Pagination from "./Pagination";
import { FilterIcon } from "./Icons";
import Filter from "./Filter";

interface Props {
  theadColumnName?: any;
  tbody?: any;
  page?: any;
  limit?: any;
  totalPage?: any;
  onPageHabdle?: any;
  limitSelection?: any;
  search?: boolean;
  filter?: boolean;
  filterItems?: any;
  itemHandle?: any;
  selectItemId?: any;
  onChangeSearch?: any;
  searchPlaceholder?: any;
  dropdownHeader?: boolean;
  dropdownHeaderChildren?: any;
}

export default function DataTable({
  theadColumnName,
  tbody,
  page,
  limit,
  totalPage,
  onPageHabdle,
  limitSelection,
  search,
  filter,
  filterItems,
  itemHandle,
  selectItemId,
  onChangeSearch,
  searchPlaceholder,
  dropdownHeader,
  dropdownHeaderChildren,
}: Props) {
  return (
    <Fragment>
      {search === true && (
        <div className="flex bg-gray-50 dark:bg-gray-800 border border-1 border-gray-300/80 shadow-sm py-2 mb-3 rounded-lg px-3">
          {search === true && filter === true && (
            <Filter
              filterItems={filterItems}
              itemHandle={itemHandle}
              selectItemId={selectItemId}
              dropdownHeader={dropdownHeader}
              dropdownHeaderChildren={dropdownHeaderChildren}
            >
              <span className="px-3 h-10 me-1 flex items-center text-xl uppercase font-semibold text-gray-700 dark:text-white bg-white dark:bg-gray-700 border border-gray-200 rounded-md">
                <FilterIcon />
              </span>
            </Filter>
          )}
          <input
            type="search"
            onChange={onChangeSearch}
            className="w-full h-10 border-gray-300 rounded-lg"
            placeholder={searchPlaceholder}
          />
        </div>
      )}

      <Table>
        <THead theadColumnName={theadColumnName} />
        {tbody}
      </Table>

      {totalPage > 0 && (
        <div className="pt-5 flex justify-between items-center">
          <div className=" text-gray-500">
            {!limitSelection
              ? `Page ${page} items ${page * limit} total page ${totalPage}`
              : limitSelection}
          </div>
          <Pagination
            handlePageClick={onPageHabdle}
            page={page}
            totalPage={totalPage}
          />
        </div>
      )}
    </Fragment>
  );
}
