import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getData, updateData } from "../../apiCalling/action";
import { useNavigate } from "react-router-dom";

export default function useColorEditContext() {
  const name = useRef();
  const [colorCode, setColorCode] = useState("");
  const form = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getColor = (id) => {
    dispatch(getData(id, setColorCode));
  };
  const updateHandle = (id) => {
    const payload = {
      name: name.current.value,
      color_code: colorCode,
    };
    dispatch(updateData(id, payload, form, navigate));
  };
  return {
    getColor,
    name,
    colorCode,
    setColorCode,
    form,
    updateHandle,
  };
}
