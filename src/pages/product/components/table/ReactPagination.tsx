import React from "react";
import ReactPaginate from "react-paginate";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";

interface Props {
  onPageHandle?: any;
  totalPages?: any;
  currentPage?: any;
}

export default function ReactPagination({
  onPageHandle,
  totalPages,
  currentPage,
}: Props) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      containerClassName="pagination mb-0"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      activeClassName="active"
      nextLabel={<TbPlayerTrackNext />}
      previousLabel={<TbPlayerTrackPrev />}
      onPageChange={onPageHandle}
      pageRangeDisplayed={5}
      marginPagesDisplayed={0}
      forcePage={currentPage - 1}
    />
  );
}
