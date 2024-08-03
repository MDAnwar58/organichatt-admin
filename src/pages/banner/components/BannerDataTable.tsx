import React, { Fragment } from "react";
import TableHeader from "../../components/TableHeader";
import Table from "../../components/Table";
import THead from "../../components/THead";
import Pagination from "../../components/Pagination";
import { FilterIcon } from "../../components/Icons";
import Filter from "../../components/Filter";

interface Props {
  theadColumnName?: any;
  tbody?: any;
  page?: any;
  limit?: any;
  totalPage?: any;
  onPageHabdle?: any;
  limitSelection?: any;
}

export default function BannerDataTable({
  theadColumnName,
  tbody,
  page,
  limit,
  totalPage,
  onPageHabdle,
  limitSelection,
}: Props) {
  return (
    <Fragment>
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
