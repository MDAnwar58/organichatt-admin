import axiosClient from "../../../axios-client";
import { successMsg } from "../../../notify";
import { GET_DATAS, GET_EDIT_DATA, GET_ERRORS } from "./actionType";

const addData = (payload, navigate) => async (dispatch) => {
  try {
    const response = await axiosClient.post(`/banner-store`, payload);
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch(getErrors([]));
      navigate("/banners");
    }
  } catch (error) {
    dispatch(getErrors(error.response.data.errors));
  }
};

const getDatas =
  (page, limit, setTotalPage, setLoading, selectItemId, search, setPage) =>
  async (dispatch) => {
    const response = await axiosClient.get(
      `/banners-get?status=${selectItemId}&search=${search}`
    );
    let totalItemsLength = response.data.data.banners.length;
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

    dispatch(getItems(newPage, limit, response.data.data.banners));

    setPage(newPage); // Set the current page after changing the limit
    setLoading(false);
    dispatch({
      type: GET_EDIT_DATA,
      payload: {},
    });
    dispatch(getErrors([]));
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

const statusChange =
  (id, page, limit, setTotalPage, setLoading, selectItemId, search, setPage) =>
  async (dispatch) => {
    const response = await axiosClient.get(`/banner-status/${id}`);
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
          setPage
        )
      );
    }
  };

const getData = (id, setGalleryImage) => async (dispatch) => {
  const response = await axiosClient.get(`/banner-edit/${id}`);
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
    const response = await axiosClient.post(`/banner-update/${id}`, payload);
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch({
        type: GET_EDIT_DATA,
        payload: {},
      });
      dispatch(getErrors([]));
      form.current.reset();
      navigate("/banners");
    }
  } catch (error) {
    dispatch(getErrors(error.response.data.errors));
  }
};

const dataDelete =
  (id, page, limit, setTotalPage, setLoading, selectItemId, search, setPage) =>
  async (dispatch) => {
    const response = await axiosClient.get(`/banner-delete/${id}`);
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
          setPage
        )
      );
    }
  };

const getErrors = (errors) => (dispatch) => {
  dispatch({
    type: GET_ERRORS,
    payload: errors,
  });
};

export { getDatas, addData, statusChange, getData, updateData, dataDelete };
