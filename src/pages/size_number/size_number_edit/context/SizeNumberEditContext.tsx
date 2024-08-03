import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getData, updateData } from "../../apiCalling/action";
import { useNavigate } from "react-router-dom";

export default function useSizeNumberEditContext() {
  const name = useRef();
  const form = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getSizeNumber = (id) => {
    dispatch(getData(id));
  };
  const updateHandle = (id) => {
    const payload = {
      name: name.current.value,
    };
    dispatch(updateData(id, payload, form, navigate));
  };
  return {
    getSizeNumber,
    name,
    form,
    updateHandle,
  };
}
