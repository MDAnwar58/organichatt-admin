import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../../apiCalling/action";
import { useNavigate } from "react-router-dom";
import namer from "color-namer";

export default function useColorCreateContext() {
  const name = useRef();
  const [color, setColor] = useState("");
  const form = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addHandle = () => {
    const payload = {
      name: name.current.value,
      color_code: color,
    };
    dispatch(addData(payload, navigate));
  };
  return {
    name,
    color,
    setColor,
    form,
    addHandle,
  };
}
