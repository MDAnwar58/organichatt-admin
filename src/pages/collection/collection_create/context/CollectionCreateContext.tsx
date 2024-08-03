import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../apiCalling/action";
import { useNavigate } from "react-router-dom";

export default function useCollectionCreateContext() {
  const name = useRef();
  const form = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addHandle = () => {
    const payload = {
      name: name.current.value,
    };
    dispatch(addData(payload, navigate));
  };
  return {
    name,
    form,
    addHandle,
  };
}
