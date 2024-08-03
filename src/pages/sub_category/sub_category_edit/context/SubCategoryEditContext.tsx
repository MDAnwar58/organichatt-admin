import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getCategoryDatas, getData, updateData } from "../../apiCalling/action";
import { useNavigate } from "react-router-dom";

export default function useSubCategoryEditContext() {
  const name = useRef();
  const category_id = useRef();
  const image_url = useRef();
  const form = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);

  const getCategories = () => {
    dispatch(getCategoryDatas());
  };

  const getSubCategory = (id, setGalleryImage) => {
    dispatch(getData(id, setGalleryImage, setDisabled));
  };
  const updateSubCategory = (id) => {
    const payload = {
      name: name.current.value,
      category_id: category_id.current.value,
      image_url: image_url.current.value,
    };
    dispatch(updateData(id, payload, form, navigate));
  };
  return {
    getCategories,
    getSubCategory,
    name,
    category_id,
    image_url,
    form,
    updateSubCategory,
    disabled,
    setDisabled,
  };
}
