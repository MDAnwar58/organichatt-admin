import axiosClient from "../../../axios-client";
import { successMsg } from "../../../notify";
import {
  GET_BRANDS,
  GET_CATEGORY_DATAS,
  GET_DATAS,
  GET_EDIT_DATA,
  GET_ERRORS,
  GET_PRODUCT_DATAS,
  GET_SUB_CATEGORY_DATAS,
} from "./actionType";

const getBrandDatas = () => async (dispatch) => {
  const response = await axiosClient.get("/brands-get");
  dispatch({
    type: GET_BRANDS,
    payload: response.data.data.brands,
  });
};
const getCategoryDatas = () => async (dispatch) => {
  const response = await axiosClient.get("/categories-get");
  dispatch({
    type: GET_CATEGORY_DATAS,
    payload: response.data.data.categories,
  });
};
const getSubCategoryDatas = () => async (dispatch) => {
  const response = await axiosClient.get("/sub-categories-get?sort_by=desc");
  dispatch({
    type: GET_SUB_CATEGORY_DATAS,
    payload: response.data.data.sub_categories,
  });
};
const getProductDatas = () => async (dispatch) => {
  const response = await axiosClient.get("/products-get?sort_by=desc");
  dispatch({
    type: GET_PRODUCT_DATAS,
    payload: response.data.data.products,
  });
};

const addData = (payload, navigate) => async (dispatch) => {
  try {
    const response = await axiosClient.post(`/offer-store`, payload);
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch(getErrors([]));
      navigate("/offers");
    }
  } catch (error) {
    dispatch(getErrors(error.response.data.errors));
  }
};

const getDatas =
  (page, limit, setTotalPage, setLoading, selectItemId, search, setPage) =>
  async (dispatch) => {
    const response = await axiosClient.get(
      `/offers-get?status=${selectItemId}&search=${search}`
    );
    console.log(response.data);
    let totalItemsLength = response.data.data.offers.length;
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

    dispatch(getItems(newPage, limit, response.data.data.offers));

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
    const response = await axiosClient.get(`/offer-status/${id}`);
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

const getData =
  (
    id,
    setGalleryImage,
    setBrandDisabled,
    setCategoryDisabled,
    setSubCategoryDisabled,
    setProductDisabled
  ) =>
  async (dispatch) => {
    const response = await axiosClient.get(`/offer-edit/${id}`);
    setGalleryImage({
      imageType: "image",
      url: response.data.data.image_url,
    });
    setBrandDisabled(response.data.data.brand === null);
    setCategoryDisabled(response.data.data.category === null);
    setSubCategoryDisabled(response.data.data.sub_category === null);
    setProductDisabled(response.data.data.product === null);
    dispatch({
      type: GET_EDIT_DATA,
      payload: response.data.data,
    });
  };

const updateData = (id, payload, form, navigate) => async (dispatch) => {
  try {
    const response = await axiosClient.post(`/offer-update/${id}`, payload);
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch({
        type: GET_EDIT_DATA,
        payload: {},
      });
      dispatch(getErrors([]));
      form.current.reset();
      navigate("/offers");
    }
  } catch (error) {
    dispatch(getErrors(error.response.data.errors));
  }
};

const dataDelete =
  (id, page, limit, setTotalPage, setLoading, selectItemId, search, setPage) =>
  async (dispatch) => {
    const response = await axiosClient.get(`/offer-delete/${id}`);
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

export {
  getBrandDatas,
  getCategoryDatas,
  getSubCategoryDatas,
  getProductDatas,
  getDatas,
  addData,
  statusChange,
  getData,
  updateData,
  dataDelete,
};
