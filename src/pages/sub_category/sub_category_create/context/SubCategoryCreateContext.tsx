import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addData, getCategoryDatas } from "../../apiCalling/action";
import { useNavigate } from "react-router-dom";

export default function useSubCategoryCreateContext() {
  const name = useRef();
  const category_id = useRef();
  const image_url = useRef();
  const form = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getCategories = () => {
    dispatch(getCategoryDatas());
  };

  const addGallery = () => {
    const payload = {
      name: name.current.value,
      category_id: category_id.current.value,
      image_url: image_url.current.value,
    };
    dispatch(addData(payload, navigate));
  };
  return {
    getCategories,
    name,
    category_id,
    image_url,
    form,
    addGallery,
  };
}
