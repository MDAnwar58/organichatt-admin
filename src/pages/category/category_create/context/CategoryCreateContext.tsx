import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../../apiCalling/action";
import { useNavigate } from "react-router-dom";

export default function useCategoryCreateContext() {
  const name = useRef();
  const image_url = useRef();
  const icon_image_url = useRef();
  const banner_url = useRef();
  const form = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addGallery = () => {
    const payload = {
      name: name.current.value,
      image_url: image_url.current.value,
    };
    dispatch(addData(payload, navigate));
  };
  return {
    name,
    image_url,
    icon_image_url,
    banner_url,
    form,
    addGallery,
  };
}
