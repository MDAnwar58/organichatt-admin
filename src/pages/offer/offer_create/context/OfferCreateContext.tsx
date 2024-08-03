import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addData,
  getBrandDatas,
  getCategoryDatas,
  getProductDatas,
  getSubCategoryDatas,
} from "../../apiCalling/action";
import { useNavigate } from "react-router-dom";

export default function useOfferCreateContext() {
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

  const addBanner = () => {
    const payload = {
      name: name.current.value,
      percents: percents.current.value,
      start_date: start_date.current.value,
      end_date: end_date.current.value,
      brand_id: brand_id.current.value,
      category_id: category_id.current.value,
      sub_category_id: sub_category_id.current.value,
      product_id: product_id.current.value,
      image_url: image_url.current.value,
    };
    dispatch(addData(payload, navigate));
  };
  return {
    getBrands,
    getCataegories,
    getSubCataegories,
    getProducts,
    brand_id,
    category_id,
    sub_category_id,
    product_id,
    name,
    percents,
    start_date,
    end_date,
    image_url,
    form,
    addBanner,
  };
}
