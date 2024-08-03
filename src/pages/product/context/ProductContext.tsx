import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addMultipleImages,
  dataDelete,
  deleteMultipleData,
  get_brands,
  get_categories,
  get_collections,
  get_sub_categories,
  getDatas,
  getProductImagesData,
  removeProductImageData,
  statusChange,
} from "../apiCalling/action";

export default function useProductContext() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const [status, setStatus] = useState({
    id: "",
    type: "",
  });
  const [collection, setCollection] = useState({
    id: "",
    type: "",
  });
  const [brand, setBrand] = useState({
    id: "",
    type: "",
  });
  const [category, setCategory] = useState({
    id: "",
    type: "",
  });
  const [subCategory, setSubCategory] = useState({
    id: "",
    type: "",
  });

  const [itemIds, setItemIds] = useState([]);
  const [selectAllItem, setSelectAllItem] = useState(false);
  // multiple images set here
  const [productId, setProductId] = useState(null);
  const [productImagesModalOpen, setProductImagesModalOpen] = useState(false);

  const dispatch = useDispatch();

  const getCollections = () => {
    dispatch(get_collections());
  };
  const getBrands = () => {
    dispatch(get_brands());
  };
  const getCategories = () => {
    dispatch(get_categories());
  };
  const getSubCategories = () => {
    dispatch(get_sub_categories());
  };

  const getProducts = () => {
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
  };

  const statusHandle = (id) => {
    dispatch(
      statusChange(
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
      )
    );
  };

  const onFilterHandle = (filterId, filterName) => {
    const Status = {
      id: filterName === "status" ? filterId : status.id,
      type:
        filterName === "status"
          ? filterId !== ""
            ? filterName
            : ""
          : status.type,
    };
    setStatus(Status);
    const Collection = {
      id: filterName === "collection" ? filterId : collection.id,
      type:
        filterName === "collection"
          ? filterId !== ""
            ? filterName
            : ""
          : collection.type,
    };
    setCollection(Collection);
    const Brand = {
      id: filterName === "brand" ? filterId : brand.id,
      type:
        filterName === "brand"
          ? filterId !== ""
            ? filterName
            : ""
          : brand.type,
    };
    setBrand(Brand);
    const Category = {
      id: filterName === "category" ? filterId : category.id,
      type:
        filterName === "category"
          ? filterId !== ""
            ? filterName
            : ""
          : category.type,
    };
    setCategory(Category);
    const SubCategory = {
      id: filterName === "sub_category" ? filterId : subCategory.id,
      type:
        filterName === "sub_category"
          ? filterId !== ""
            ? filterName
            : ""
          : subCategory.type,
    };
    setSubCategory(SubCategory);
    dispatch(
      getDatas(
        Status,
        Collection,
        Brand,
        Category,
        SubCategory,
        page,
        limit,
        setTotalPage,
        setLoading
      )
    );
  };

  const clearTableFilter = () => {
    const Status = {
      id: "",
      type: "",
    };
    setStatus(Status);
    const Collection = {
      id: "",
      type: "",
    };
    setCollection(Collection);
    const Brand = {
      id: "",
      type: "",
    };
    setBrand(Brand);
    const Category = {
      id: "",
      type: "",
    };
    setCategory(Category);
    const SubCategory = {
      id: "",
      type: "",
    };
    setSubCategory(SubCategory);
    dispatch(
      getDatas(
        Status,
        Collection,
        Brand,
        Category,
        SubCategory,
        page,
        limit,
        setTotalPage,
        setLoading
      )
    );
  };

  const multipleImageAdded = (
    images,
    setGalleryImages,
    setProductImagesModalOpen
  ) => {
    const Images = images.map((image) => image.url);
    dispatch(
      addMultipleImages(
        Images,
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
      )
    );
  };

  const getProductImages = (id) => {
    dispatch(getProductImagesData(id));
  };

  const removeProductImage = (id, productId) => {
    dispatch(
      removeProductImageData(
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
      )
    );
  };

  const onDeleteHandle = (id) => {
    dispatch(
      dataDelete(
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
      )
    );
  };

  const onAllDelete = () => {
    dispatch(
      deleteMultipleData(
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
      )
    );
  };

  return {
    getProducts,
    getCollections,
    getBrands,
    getCategories,
    getSubCategories,
    status,
    collection,
    brand,
    category,
    subCategory,
    page,
    limit,
    totalPage,
    statusHandle,
    onFilterHandle,
    onDeleteHandle,
    itemIds,
    setItemIds,
    selectAllItem,
    setSelectAllItem,
    onAllDelete,
    clearTableFilter,
    multipleImageAdded,
    productId,
    setProductId,
    productImagesModalOpen,
    setProductImagesModalOpen,
    getProductImages,
    removeProductImage,
  };
}
