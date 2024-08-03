import axiosClient from "../../../axios-client";
import { successMsg } from "../../../notify";
import {
  GET_DATA,
  GET_DATAS,
  GET_ERRORS,
  GET_GALLERY_CATEGORIES,
} from "./actionType";

const getGalleryCategories = () => async (dispatch) => {
  const response = await axiosClient.get("/gallery-categories-get");
  dispatch({
    type: GET_GALLERY_CATEGORIES,
    payload: response.data.data,
  });
};

const getDatas =
  (page, limit, setTotalPage, selectItemId, search, setLoading) =>
  async (dispatch) => {
    const response = await axiosClient.get(
      `/galleries-get?gallery_category_id=${selectItemId}&search=${search}`
    );
    dispatch(getItems(page, limit, response.data.data.galleries));
    setTotalPage(Math.ceil(response.data.data.galleries.length / limit));
    setLoading(false);
  };

const getItems = (page, limit, items) => (dispatch) => {
  let array = [];
  for (let i = (page - 1) * limit; i < page * limit && items[i]; i++) {
    array.push(items[i]);
  }
  dispatch({
    type: GET_DATAS,
    payload: array,
  });
};

const addData =
  (
    formData,
    setOpenModal,
    form,
    setImagePreviewUrl,
    page,
    limit,
    setTotalPage,
    selectItemId,
    search,
    setLoading,
    setImageError,
    setImageNameError
  ) =>
  async (dispatch) => {
    try {
      const response = await axiosClient.post("/gallery-store", formData);
      // console.log(response.data);
      if (response.data.status === "success") {
        successMsg(response.data.msg);
        setOpenModal(false);
        dispatch(
          getDatas(page, limit, setTotalPage, selectItemId, search, setLoading)
        );
        form.current.reset();
        setImagePreviewUrl("");
      }
    } catch (error) {
      dispatch(getErrors(error.response.data.errors));
      if (error.response.data.errors.image_name) {
        setImageError(true);
      }
      if (error.response.data.errors.image) {
        setImageNameError(true);
      }
    }
  };

const getGalleryImageInfo = (id) => async (dispatch) => {
  const response = await axiosClient.get(`/gallery-info-or-edit/${id}`);
  dispatch({
    type: GET_DATA,
    payload: response.data.data,
  });
};

const getErrors = (errors) => (dispatch) => {
  dispatch({
    type: GET_ERRORS,
    payload: errors,
  });
};

const updateData =
  (
    id,
    payload,
    page,
    limit,
    setTotalPage,
    setIsOpen,
    selectItemId,
    search,
    setLoading
  ) =>
  async (dispatch) => {
    try {
      const response = await axiosClient.post(`/gallery-update/${id}`, payload);
      if (response.data.status === "success") {
        successMsg(response.data.msg);
        dispatch(
          getDatas(page, limit, setTotalPage, selectItemId, search, setLoading)
        );
        setIsOpen(false);
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

const getDatasWithGalleryCategory =
  (page, limit, setTotalPage, gallery_category_id, search, setLoading) =>
  (dispatch) => {
    dispatch(
      getDatas(
        page,
        limit,
        setTotalPage,
        gallery_category_id,
        search,
        setLoading
      )
    );
  };

const dataDelete =
  (id, page, limit, setTotalPage, selectItemId, search, setLoading) =>
  async (dispatch) => {
    const response = await axiosClient.get(`/gallery-delete/${id}`);
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch(
        getDatas(page, limit, setTotalPage, selectItemId, search, setLoading)
      );
    }
  };

const multipleDataDelete =
  (payload, page, limit, setTotalPage, selectItemId, search, setLoading) =>
  async (dispatch) => {
    const response = await axiosClient.post(
      `/gallery-multiple-delete`,
      payload
    );
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch(
        getDatas(page, limit, setTotalPage, selectItemId, search, setLoading)
      );
    }
  };

export {
  getGalleryCategories,
  getDatas,
  addData,
  getGalleryImageInfo,
  updateData,
  getDatasWithGalleryCategory,
  dataDelete,
  multipleDataDelete,
};
