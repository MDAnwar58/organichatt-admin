import axiosClient from "../../../axios-client";
import { successMsg } from "../../../notify";
import { GET_DATA, GET_DATAS, GET_ERRORS } from "./actionType";

const addData = (payload, navigate) => async (dispatch) => {
  try {
    const response = await axiosClient.post(`/category-store`, payload);
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch(getErrors({}));
      navigate("/categories");
    }
  } catch (error) {
    dispatch(getErrors(error.response.data.errors));
  }
};

const getDatas =
  (page, limit, setTotalPage, setLoading, selectItemId, search, setPage) =>
  async (dispatch) => {
    const response = await axiosClient.get(
      `/categories-get?status=${selectItemId}&search=${search}`
    );
    // console.log(response.data.data.categories);
    let totalItemsLength = response.data.data.categories.length;
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

    dispatch(getItems(newPage, limit, response.data.data.categories));

    setPage(newPage); // Set the current page after changing the limit
    setLoading(false);
    dispatch({
      type: GET_DATA,
      payload: {},
    });
    dispatch(getErrors({}));
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

const iconImageStoreOrUpdate =
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
    setPage
  ) =>
  async (dispatch) => {
    const response = await axiosClient.post(
      `/category-icon-store-or-update/${id}`,
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
          setPage
        )
      );
    }
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
    setPage
  ) =>
  async (dispatch) => {
    const response = await axiosClient.post(
      `/category-banner-store-or-update/${id}`,
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
          setPage
        )
      );
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
    setLength
  ) =>
  async (dispatch) => {
    const response = await axiosClient.get(`/category-status/${id}`);
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
    setLength
  ) =>
  async (dispatch) => {
    const response = await axiosClient.get(`/category-delete/${id}`);
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

const getData = (id, setGalleryImage) => async (dispatch) => {
  const response = await axiosClient.get(`/category-edit/${id}`);
  setGalleryImage({
    imageType: "image",
    url: response.data.data.image_url,
  });
  dispatch({
    type: GET_DATA,
    payload: response.data.data,
  });
};

const updateData =
  (id, payload, form, setGalleryImage, navigate) => async (dispatch) => {
    try {
      const response = await axiosClient.post(
        `/category-update/${id}`,
        payload
      );
      if (response.data.status === "success") {
        successMsg(response.data.msg);
        dispatch({
          type: GET_DATA,
          payload: {},
        });
        dispatch(getErrors({}));
        form.current.reset();
        setGalleryImage({
          imageType: "",
          url: "",
        });
        navigate("/categories");
      }
    } catch (error) {
      dispatch(getErrors(error.response.data.errors));
    }
  };

const getErrors = (errors) => (dispatch) => {
  dispatch({
    type: GET_ERRORS,
    payload: errors,
  });
};

export {
  getDatas,
  addData,
  bannerImageStoreOrUpdate,
  iconImageStoreOrUpdate,
  statusChange,
  dataDelete,
  getData,
  updateData,
};
