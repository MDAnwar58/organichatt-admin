import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData, updateData } from "../../apiCalling/action";

export default function useBrandEditContext() {
  const name = useRef();
  const image_url = useRef();
  const form = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getBrand = (id, setGalleryImage) => {
    dispatch(getData(id, setGalleryImage));
  };
  const updateBrand = (id) => {
    const payload = {
      name: name.current.value,
      image_url: image_url.current.value,
    };
    dispatch(updateData(id, payload, form, navigate));
  };
  return {
    getBrand,
    name,
    image_url,
    form,
    updateBrand,
  };
}
