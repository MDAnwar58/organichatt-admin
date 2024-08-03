import axiosClient from "../../../axios-client";
import { successMsg } from "../../../notify";
import {
  GET_CATEGORIES,
  GET_DATAS,
  GET_EDIT_DATA,
  GET_SUBMIT_ERRORS,
} from "./actionType";

const getDatas =
  (
    page,
    limit,
    setTotalPage,
    setLoading,
    selectItemId,
    search,
    setPage,
    setLength,
    sortByDir,
    sortBy
  ) =>
  async (dispatch) => {
    const response = await axiosClient.get(
      `/sub-categories-get?sort_by_dir=${sortByDir}&sort_by=${sortBy}&status=${selectItemId}&search=${search}`
    );
    let totalItemsLength = response.data.data.sub_categories.length;
    setLength(totalItemsLength);
    let totalPagesFromResponse = Math.ceil(totalItemsLength / limit);
    setTotalPage(totalPagesFromResponse);

    let newPage = page; // Initialize newPage with current page

    if (totalItemsLength === 0) {
      // If there are no search results, reset the page to 1
      newPage = 1;
    } else if (page > totalPagesFromResponse) {
      // If the current page exceeds total pages, reset to last page
      newPage = totalPagesFromResponse;
    }

    dispatch(getItems(newPage, limit, response.data.data.sub_categories));

    setPage(newPage); // Set the current page after changing the limit
    setLoading(false);
    dispatch({
      type: GET_EDIT_DATA,
      payload: {},
    });
    dispatch(getErrors([]));
  };

const getItems = (page, limit, items) => (dispatch) => {
  // console.log(items);
  let array = [];
  for (let i = (page - 1) * limit; i < page * limit && items[i]; i++) {
    array.push(items[i]);
  }
  dispatch({
    type: GET_DATAS,
    payload: array,
  });
};

const addData = (payload, navigate) => async (dispatch) => {
  try {
    const response = await axiosClient.post(`/sub-category-store`, payload);
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch(getErrors([]));
      navigate("/sub-categories");
    }
  } catch (error) {
    dispatch(getErrors(error.response.data.errors));
  }
};

const statusChange =
  (
    id,
    page,
    limit,
    setTotalPage,
    setLoading,
    selectItemId,
    search,
    setPage,
    setLength,
    sortByDir,
    sortBy
  ) =>
  async (dispatch) => {
    const response = await axiosClient.get(`/sub-category-status/${id}`);
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch(
        getDatas(
          page,
          limit,
          setTotalPage,
          setLoading,
          selectItemId,
          search,
          setPage,
          setLength,
          sortByDir,
          sortBy
        )
      );
    }
  };

const dataDelete =
  (
    id,
    page,
    limit,
    setTotalPage,
    setLoading,
    selectItemId,
    search,
    setPage,
    setLength,
    sortByDir,
    sortBy
  ) =>
  async (dispatch) => {
    const response = await axiosClient.get(`/sub-category-delete/${id}`);
    if (response.data.status) {
      successMsg(response.data.msg);
      dispatch(
        getDatas(
          page,
          limit,
          setTotalPage,
          setLoading,
          selectItemId,
          search,
          setPage,
          setLength,
          sortByDir,
          sortBy
        )
      );
    }
  };

const dataSorting =
  (
    page,
    limit,
    setTotalPage,
    setLoading,
    selectItemId,
    search,
    setPage,
    setLength,
    dir,
    sort
  ) =>
  async (dispatch) => {
    dispatch(
      getDatas(
        page,
        limit,
        setTotalPage,
        setLoading,
        selectItemId,
        search,
        setPage,
        setLength,
        dir,
        sort
      )
    );
  };

const getCategoryDatas = () => async (dispatch) => {
  const response = await axiosClient.get(`/categories-get`);
  dispatch({
    type: GET_CATEGORIES,
    payload: response.data.data.categories,
  });
};

const getData = (id, setGalleryImage, setDisabled) => async (dispatch) => {
  const response = await axiosClient.get(`/sub-category-edit/${id}`);
  if (response.data.data.category_id !== null) {
    setDisabled(false);
  }
  setGalleryImage({
    imageType: "image",
    url: response.data.data.image_url,
  });
  dispatch({
    type: GET_EDIT_DATA,
    payload: response.data.data,
  });
};

const updateData = (id, payload, form, navigate) => async (dispatch) => {
  try {
    const response = await axiosClient.post(
      `/sub-category-update/${id}`,
      payload
    );
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch({
        type: GET_EDIT_DATA,
        payload: {},
      });
      dispatch(getErrors([]));
      form.current.reset();
      navigate("/sub-categories");
    }
  } catch (error) {
    dispatch(getErrors(error.response.data.errors));
  }
};

const getErrors = (errors) => (dispatch) => {
  dispatch({
    type: GET_SUBMIT_ERRORS,
    payload: errors,
  });
};

const bannerImageStoreOrUpdate =
  (
    id,
    payload,
    setGalleryImage,
    setGalleryId,
    page,
    limit,
    setTotalPage,
    setLoading,
    selectItemId,
    search,
    setPage,
    setLength,
    sortByDir,
    sortBy
  ) =>
  async (dispatch) => {
    const response = await axiosClient.post(
      `/sub-category-banner-store-or-update/${id}`,
      payload
    );
    if (response.data.status) {
      successMsg(response.data.msg);
      setGalleryImage({
        imageType: "",
        url: "",
      });
      setGalleryId(null);
      dispatch(
        getDatas(
          page,
          limit,
          setTotalPage,
          setLoading,
          selectItemId,
          search,
          setPage,
          setLength,
          sortByDir,
          sortBy
        )
      );
    }
  };

export {
  getDatas,
  addData,
  statusChange,
  dataDelete,
  dataSorting,
  getCategoryDatas,
  getData,
  updateData,
  bannerImageStoreOrUpdate,
};
