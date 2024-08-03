import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData, updateData } from "../../apiCalling/action";

export default function useBannerEditContext() {
  const image_url = useRef();
  const form = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getBanner = (id, setGalleryImage) => {
    dispatch(getData(id, setGalleryImage));
  };
  const updateBrand = (id) => {
    const payload = {
      image_url: image_url.current.value,
    };
    dispatch(updateData(id, payload, form, navigate));
  };
  return {
    getBanner,
    image_url,
    form,
    updateBrand,
  };
}
