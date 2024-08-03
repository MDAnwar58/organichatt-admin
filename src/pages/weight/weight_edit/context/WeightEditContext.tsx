import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getData, updateData } from "../../apiCalling/action";
import { useNavigate } from "react-router-dom";

export default function useWeightEditContext() {
  const number = useRef();
  const Weight = useRef();
  const form = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getWeight = (id) => {
    dispatch(getData(id));
  };
  const updateHandle = (id) => {
    const payload = {
      number: number.current.value,
      weight: Weight.current.value,
    };
    dispatch(updateData(id, payload, form, navigate));
  };
  return {
    getWeight,
    number,
    Weight,
    form,
    updateHandle,
  };
}
