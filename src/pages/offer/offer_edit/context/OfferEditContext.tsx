import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getBrandDatas,
  getCategoryDatas,
  getData,
  getProductDatas,
  getSubCategoryDatas,
  updateData,
} from "../../apiCalling/action";

export default function useOfferEditContext() {
  const [brandDisabled, setBrandDisabled] = useState(true);
  const [categoryDisabled, setCategoryDisabled] = useState(true);
  const [subCategoryDisabled, setSubCategoryDisabled] = useState(true);
  const [productDisabled, setProductDisabled] = useState(true);
  const brand_id = useRef();
  const category_id = useRef();
  const sub_category_id = useRef();
  const product_id = useRef();
  const name = useRef();
  const percents = useRef();
  const start_date = useRef();
  const end_date = useRef();
  const image_url = useRef();
  const form = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getBrands = () => {
    dispatch(getBrandDatas());
  };
  const getCataegories = () => {
    dispatch(getCategoryDatas());
  };
  const getSubCataegories = () => {
    dispatch(getSubCategoryDatas());
  };
  const getProducts = () => {
    dispatch(getProductDatas());
  };

  const getOffer = (id, setGalleryImage) => {
    dispatch(
      getData(
        id,
        setGalleryImage,
        setBrandDisabled,
        setCategoryDisabled,
        setSubCategoryDisabled,
        setProductDisabled
      )
    );
  };
  const updateBrand = (id) => {
    const payload = {
      name: name.current.value,
      percents: percents.current.value,
      start_date: start_date.current.value,
      end_date: end_date.current.value,
      brand_id: brandDisabled === true ? null : brand_id.current.value,
      category_id: categoryDisabled === true ? null : category_id.current.value,
      sub_category_id:
        subCategoryDisabled === true ? null : sub_category_id.current.value,
      product_id: productDisabled === true ? null : product_id.current.value,
      image_url: image_url.current.value,
    };
    dispatch(updateData(id, payload, form, navigate));
  };
  return {
    getBrands,
    getCataegories,
    getSubCataegories,
    getProducts,
    brandDisabled,
    setBrandDisabled,
    categoryDisabled,
    setCategoryDisabled,
    subCategoryDisabled,
    setSubCategoryDisabled,
    productDisabled,
    setProductDisabled,
    brand_id,
    category_id,
    sub_category_id,
    product_id,
    name,
    percents,
    start_date,
    end_date,
    getOffer,
    image_url,
    form,
    updateBrand,
  };
}
