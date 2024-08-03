import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Errors,
  getData,
  getDatas,
  updateData,
  deleteData,
  addData,
} from "../apiCalling/action";
import Loading from "../../../components/Loading";
import Pagination from "../../../components/Pagination";
import { GalleryCategoryEditModal } from "./GalleryCategoryEditModal";
import { GalleryCategoryCreateModal } from "./GalleryCategoryCreateModal";
import THead from "../../../components/THead";
import DataNotFound from "../../../components/DataNotFound";
import Table from "../../../components/Table";
import Column from "../../../components/Column";

export default function GalleryCategoryTable({ openModal, setOpenModal }) {
  const galleryCategoryNameInputRef = useRef(null);
  const galleryCategoryForm = useRef();
  const [openEditModal, setOpenEditModal] = useState(false);
  const galleryCategoryNameEditInputRef = useRef(null);
  const galleryCategoryUpdateForm = useRef();

  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const theadColumnName = [
    <Column name="#" />,
    <Column name="Gallery Category name" />,
    <Column name="Action" />,
  ];

  useEffect(() => {
    dispatch(getDatas(page, limit, setTotalPage, setLoading));
    console.clear();
  }, []);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
    dispatch(getDatas(selected + 1, limit, setTotalPage, setLoading));
  };

  const galleryCategories = useSelector((state) => state.items);

  const handleSave = () => {
    const payload = {
      name: galleryCategoryNameInputRef.current.value,
    };
    dispatch(
      addData(
        payload,
        galleryCategoryForm,
        setOpenModal,
        page,
        limit,
        setTotalPage,
        setLoading
      )
    );
  };

  const hanldeGalleryCategory = (id) => {
    setOpenEditModal(true);
    dispatch(getData(id));
  };

  const galleryCategory = useSelector((state) => state.item);

  const colseEditModal = () => {
    setOpenEditModal(false);
    dispatch(getData(null));
    galleryCategoryUpdateForm.current.reset();
  };

  const updateSumitHandle = (id) => {
    const payload = {
      name: galleryCategoryNameEditInputRef.current.value,
    };
    dispatch(
      updateData(
        id,
        payload,
        setOpenEditModal,
        page,
        limit,
        setTotalPage,
        galleryCategoryUpdateForm,
        setLoading
      )
    );
  };

  const errors = useSelector((state) => state.errors);

  const nameErrorHandler = () => {
    dispatch(Errors(null));
  };

  const deleteHanlde = (id) => {
    dispatch(deleteData(id, page, limit, setTotalPage, setLoading));
  };
  return (
    <Fragment>
      <Table>
        <THead theadColumnName={theadColumnName} />
        <tbody>
          {galleryCategories.length > 0 ? (
            galleryCategories.map((galleryCategory, index) => (
              <tr
                key={index + 1 + (page - 1) * limit}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600  text-center"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1 + (page - 1) * limit}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {galleryCategory.name}
                </th>
                <td className="flex items-center px-6 py-4 justify-center">
                  <button
                    type="button"
                    onClick={() => hanldeGalleryCategory(galleryCategory.id)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteHanlde(galleryCategory.id)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : loading === true ? (
            <Loading colSpan={3} height={60} />
          ) : (
            <DataNotFound colSpan={3} />
          )}
        </tbody>
      </Table>
      {totalPage > 0 && (
        <div className=" pt-3">
          <Pagination
            handlePageClick={handlePageClick}
            page={page}
            totalPage={totalPage}
          />
        </div>
      )}

      <GalleryCategoryCreateModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        galleryCategoryNameInputRef={galleryCategoryNameInputRef}
        galleryCategoryForm={galleryCategoryForm}
        handleSave={handleSave}
        nameErrorHandler={nameErrorHandler}
        errors={errors}
      />

      <GalleryCategoryEditModal
        openEditModal={openEditModal}
        colseEditModal={colseEditModal}
        galleryCategoryNameEditInputRef={galleryCategoryNameEditInputRef}
        galleryCategoryUpdateForm={galleryCategoryUpdateForm}
        galleryCategory={galleryCategory}
        updateSumitHandle={updateSumitHandle}
        errors={errors}
        nameErrorHandler={nameErrorHandler}
      />
    </Fragment>
  );
}
