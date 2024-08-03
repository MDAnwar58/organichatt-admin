import axiosClient from "../../../axios-client";
import { successMsg, warningMsg } from "../../../notify";
import {
  GET_BRANDS,
  GET_CATEGORIES,
  GET_COLLECTIONS,
  GET_COLORS,
  GET_DATAS,
  GET_EDIT_DATA,
  GET_PRODUCT_IMAGES_DATA,
  GET_SIZES,
  GET_SIZE_NUMBERS,
  GET_SUBMIT_ERRORS,
  GET_SUB_CATEGORIES,
  GET_WEIGHTS,
} from "./actionType";

// calling collections, brands, categories , sub_categories, colors , sizes, size_numbers, wieghts. start here call api

const get_collections = () => async (dispatch) => {
  const response = await axiosClient.get(`/collections-get?status=1`);
  dispatch({
    type: GET_COLLECTIONS,
    payload: response.data.data.collections,
  });
};

const get_brands = () => async (dispatch) => {
  const response = await axiosClient.get(`/brands-get?status=1`);
  dispatch({
    type: GET_BRANDS,
    payload: response.data.data.brands,
  });
};
const get_categories = () => async (dispatch) => {
  const response = await axiosClient.get(`/categories-get?status=1`);
  dispatch({
    type: GET_CATEGORIES,
    payload: response.data.data.categories,
  });
};

const get_sub_categories = () => async (dispatch) => {
  const response = await axiosClient.get(
    `/sub-categories-get?status=1&sort_by=desc`
  );
  dispatch({
    type: GET_SUB_CATEGORIES,
    payload: response.data.data.sub_categories,
  });
};

const get_colors = () => async (dispatch) => {
  const response = await axiosClient.get(`/colors-get`);
  dispatch({
    type: GET_COLORS,
    payload: response.data.data.colors,
  });
};
const get_sizes = () => async (dispatch) => {
  const response = await axiosClient.get(`/sizes-get`);
  dispatch({
    type: GET_SIZES,
    payload: response.data.data.sizes,
  });
};
const get_size_numbers = () => async (dispatch) => {
  const response = await axiosClient.get(`/size-numbers-get`);
  dispatch({
    type: GET_SIZE_NUMBERS,
    payload: response.data.data.size_numbers,
  });
};
const get_weights = () => async (dispatch) => {
  const response = await axiosClient.get(`/weights-get`);
  dispatch({
    type: GET_WEIGHTS,
    payload: response.data.data.weights,
  });
};

// end api calling

const addData = (payload, navigate) => async (dispatch) => {
  try {
    const response = await axiosClient.post(`/product-store`, payload);
    // console.log(response.data);
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch(getErrors([]));
      navigate("/products");
    }
  } catch (error) {
    dispatch(getErrors(error.response.data.errors));
  }
};

const getDatas =
  (
    status,
    collection,
    brand,
    category,
    subCategory,
    page,
    limit,
    setTotalPage,
    setLoading
  ) =>
  async (dispatch) => {
    const response = await axiosClient.get(
      `/products-get?status=${status.type}&status_value=${status.id}&collection=${collection.type}&collection_id=${collection.id}&brand=${brand.type}&brand_id=${brand.id}&category=${category.type}&category_id=${category.id}&sub_category=${subCategory.type}&sub_category_id=${subCategory.id}`
    );
    console.log(response.data.data.products);
    let totalItemsLength = response.data.data.products.length;

    dispatch({
      type: GET_DATAS,
      payload: totalItemsLength > 0 ? response.data.data.products : [],
    });

    let totalPagesFromResponse = Math.ceil(totalItemsLength / limit);
    setTotalPage(totalPagesFromResponse);

    setLoading(false);
    dispatch({
      type: GET_EDIT_DATA,
      payload: {},
    });
  };

const statusChange =
  (
    id,
    status,
    collection,
    brand,
    category,
    subCategory,
    page,
    limit,
    setTotalPage,
    setLoading
  ) =>
  async (dispatch) => {
    const response = await axiosClient.get(`/product-status/${id}`);
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch(
        getDatas(
          status,
          collection,
          brand,
          category,
          subCategory,
          page,
          limit,
          setTotalPage,
          setLoading
        )
      );
    }
  };

const addMultipleImages =
  (
    images,
    productId,
    setGalleryImages,
    setProductImagesModalOpen,
    status,
    collection,
    brand,
    category,
    subCategory,
    page,
    limit,
    setTotalPage,
    setLoading
  ) =>
  async (dispatch) => {
    try {
      const response = await axiosClient.post(`/product-images-store`, {
        images: images,
        productId: productId,
      });
      console.log(response.data);
      if (response.data.status === "success") {
        successMsg(response.data.msg);
        setGalleryImages([]);
        dispatch(
          getDatas(
            status,
            collection,
            brand,
            category,
            subCategory,
            page,
            limit,
            setTotalPage,
            setLoading
          )
        );
        setProductImagesModalOpen(false);
        dispatch(getErrors({}));
      }
    } catch (error) {
      dispatch(getErrors(error.response.data.errors));
    }
  };

const getProductImagesData = (productId) => async (dispatch) => {
  const response = await axiosClient.get(`/product-images-get/${productId}`);
  // console.log(response.data);
  dispatch({
    type: GET_PRODUCT_IMAGES_DATA,
    payload: response.data,
  });
};

const removeProductImageData =
  (
    id,
    productId,
    status,
    collection,
    brand,
    category,
    subCategory,
    page,
    limit,
    setTotalPage,
    setLoading
  ) =>
  async (dispatch) => {
    const response = await axiosClient.get(`/product-images-delete/${id}`);
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch(getProductImagesData(productId));
      dispatch(
        getDatas(
          status,
          collection,
          brand,
          category,
          subCategory,
          page,
          limit,
          setTotalPage,
          setLoading
        )
      );
    }
  };

const dataDelete =
  (
    id,
    status,
    collection,
    brand,
    category,
    subCategory,
    page,
    limit,
    setTotalPage,
    setLoading
  ) =>
  async (dispatch) => {
    const response = await axiosClient.get(`/product-delete/${id}`);
    if (response.data.status) {
      successMsg(response.data.msg);
      dispatch(
        getDatas(
          status,
          collection,
          brand,
          category,
          subCategory,
          page,
          limit,
          setTotalPage,
          setLoading
        )
      );
    }
  };

const getData =
  (
    id: any,
    setGalleryImage: any,
    setCollectionDisabled: any,
    setBrandDisabled: any,
    setCategoryDisabled: any,
    setSubCategoryDisabled: any,
    setColorDisabled: any,
    setSizeDisabled: any,
    setSizeNumberDisabled: any,
    setWeightDisabled: any,
    setColorIds: any,
    setSizes: any,
    setSizeNumbers: any,
    setWeights: any,
    setTags: any
  ) =>
  async (dispatch) => {
    const response = await axiosClient.get(`/product-edit/${id}`);
    setGalleryImage({
      imageType: "",
      url: response.data.data.image_url,
    });
    dispatch({
      type: GET_EDIT_DATA,
      payload: response.data.data,
    });
    if (response.data.data.collection_id) {
      setCollectionDisabled(false);
    }
    if (response.data.data.brand_id) {
      setBrandDisabled(false);
    }
    if (response.data.data.category_id) {
      setCategoryDisabled(false);
    }
    if (response.data.data.sub_category_id) {
      setSubCategoryDisabled(false);
    }
    if (response.data.data.product_colors) {
      setColorDisabled(false);
      const colorIds = response.data.data.product_colors.map((item) =>
        item.color_id.toString()
      );
      setColorIds(colorIds || []);
    }
    if (response.data.data.product_sizes) {
      setSizeDisabled(false);
      const sizes = response.data.data.product_sizes.map((size) => ({
        size_id: size.size_id,
        price: size.price,
        discount_price: size.discount_price,
      }));
      setSizes(sizes);
    }
    if (response.data.data.product_size_numbers) {
      setSizeNumberDisabled(false);
      const size_numbers = response.data.data.product_size_numbers.map(
        (size_number) => ({
          size_number_id: size_number.size_number_id,
          price: size_number.price,
          discount_price: size_number.discount_price,
        })
      );
      setSizeNumbers(size_numbers);
    }
    if (response.data.data.product_weights) {
      setWeightDisabled(false);
      const weights = response.data.data.product_weights.map((weight) => ({
        weight_id: weight.weight_id,
        price: weight.price,
        discount_price: weight.discount_price,
      }));
      setWeights(weights);
    }
    if (response.data.data.meta_tag) {
      const tags = response.data.data.meta_tag.split(",").map((item) => {
        const trimmedItem = item.trim();
        return { id: trimmedItem, text: trimmedItem };
      });
      setTags(tags);
    }
  };

const updateData =
  (id: string, payload: any, form: any, navigate: any) => async (dispatch) => {
    const response = await axiosClient.post(`/product-update/${id}`, payload);
    try {
      if (response.data.status === "success") {
        successMsg(response.data.msg);
        dispatch({
          type: GET_EDIT_DATA,
          payload: {},
        });
        dispatch(getErrors([]));
        form.current.reset();
        navigate("/products");
      }
    } catch (error) {
      dispatch(getErrors(error.response.data.errors));
    }
  };

const deleteMultipleData =
  (
    status,
    collection,
    brand,
    category,
    subCategory,
    itemIds,
    setItemIds,
    setSelectAllItem,
    page,
    limit,
    setTotalPage,
    setLoading
  ) =>
  async (dispatch) => {
    if (itemIds.length > 0) {
      const response = await axiosClient.post(`/multiple-product-delete`, {
        ids: itemIds,
      });
      if (response.data.status === "success") {
        setItemIds([]);
        setSelectAllItem(false);
        successMsg(response.data.msg);
        dispatch(
          getDatas(
            status,
            collection,
            brand,
            category,
            subCategory,
            page,
            limit,
            setTotalPage,
            setLoading
          )
        );
      }
    } else {
      warningMsg("Please select at least one product");
    }
  };

const getErrors = (errors) => (dispatch) => {
  dispatch({
    type: GET_SUBMIT_ERRORS,
    payload: errors,
  });
};

export {
  get_collections,
  get_brands,
  get_categories,
  get_sub_categories,
  get_colors,
  get_sizes,
  get_size_numbers,
  get_weights,
  addData,
  getDatas,
  statusChange,
  dataDelete,
  getData,
  updateData,
  deleteMultipleData,
  addMultipleImages,
  getProductImagesData,
  removeProductImageData,
};
