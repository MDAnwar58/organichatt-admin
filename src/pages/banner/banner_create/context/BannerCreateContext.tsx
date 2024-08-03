import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../../apiCalling/action";
import { useNavigate } from "react-router-dom";

export default function useBannerCreateContext() {
  const image_url = useRef();
  const form = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addBanner = () => {
    const payload = {
      image_url: image_url.current.value,
    };
    dispatch(addData(payload, navigate));
  };
  return {
    image_url,
    form,
    addBanner,
  };
}
