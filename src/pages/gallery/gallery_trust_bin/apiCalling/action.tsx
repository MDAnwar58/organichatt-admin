import axiosClient from "../../../../axios-client";
import { successMsg } from "../../../../notify";
import { GET_DATAS, GET_GALLERY_CATEGORIES } from "./actionType";

const galleryCategoriesGet = () => async (dispatch) => {
  const response = await axiosClient.get("/gallery-categories-get");
  dispatch({
    type: GET_GALLERY_CATEGORIES,
    payload: response.data.data,
  });
};

const getDatas =
  (page, limit, setTotalPage, galleryCategoryId, search, setLoading) =>
  async (dispatch) => {
    const response = await axiosClient.get(
      `/galleries-get-restore?gallery_category_id=${galleryCategoryId}&search=${search}`
    );
    dispatch(getItems(page, limit, response.data.data.galleries));
    setTotalPage(Math.ceil(response.data.data.galleries.length / limit));
    setLoading(false);
  };

const getItems = (page, limit, items) => (dispatch) => {
  const array = [];
  for (let i = (page - 1) * limit; i < page * limit && items[i]; i++) {
    array.push(items[i]);
  }
  dispatch({
    type: GET_DATAS,
    payload: array,
  });
};

const getDatasWithGalleryCategory =
  (page, limit, setTotalPage, gallery_category_id, search, setLoading) =>
  async (dispatch) => {
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

const galleryRestore =
  (id, page, limit, setTotalPage, galleryCategoryId, search, setLoading) =>
  async (dispatch) => {
    const response = await axiosClient.get(`/gallery-restore/${id}`);
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch(
        getDatas(
          page,
          limit,
          setTotalPage,
          galleryCategoryId,
          search,
          setLoading
        )
      );
    }
  };

const galleryDelete =
  (id, page, limit, setTotalPage, galleryCategoryId, search, setLoading) =>
  async (dispatch) => {
    const response = await axiosClient.get(`/gallery-permanently-delete/${id}`);
    console.log(response.data);

    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch(
        getDatas(
          page,
          limit,
          setTotalPage,
          galleryCategoryId,
          search,
          setLoading
        )
      );
    }
  };

const multipleGalleryRestore =
  (payload, page, limit, setTotalPage, galleryCategoryId, search, setLoading) =>
  async (dispatch) => {
    const response = await axiosClient.post(
      `/gallery-multiple-restore`,
      payload
    );
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch(
        getDatas(
          page,
          limit,
          setTotalPage,
          galleryCategoryId,
          search,
          setLoading
        )
      );
    }
  };

const multipleGalleryDelete =
  (payload, page, limit, setTotalPage, galleryCategoryId, search, setLoading) =>
  async (dispatch) => {
    const response = await axiosClient.post(
      `/gallery-multiple-permanently-delete`,
      payload
    );
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch(
        getDatas(
          page,
          limit,
          setTotalPage,
          galleryCategoryId,
          search,
          setLoading
        )
      );
    }
  };

export {
  galleryCategoriesGet,
  getDatas,
  getDatasWithGalleryCategory,
  galleryRestore,
  galleryDelete,
  multipleGalleryRestore,
  multipleGalleryDelete,
};
