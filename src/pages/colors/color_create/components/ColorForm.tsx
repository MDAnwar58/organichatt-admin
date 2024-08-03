import React from "react";
import FormHeader from "../../../components/FormHeader";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import { useSelector } from "react-redux";
import useColorCreateContext from "../context/ColorCreateContext";
import { HexColorPicker } from "react-colorful";
import namer from "color-namer";
import "../../../../assets/css/react-colorful.css";

export default function ColorForm() {
  const { name, color, setColor, form, addHandle } = useColorCreateContext();
  // Use color-namer to get the color name
  let colorName;
  try {
    const result = namer(color);
    colorName = result.basic[0].name;
  } catch (error) {}

  const errors = useSelector((state) => state.errors);
  return (
    <div className="mx-auto 2xl:w-4/12 xl:w-5/12 lg:w-6/12 sm:w-8/12 w-full pt-0  bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-md mt-28">
      <FormHeader title="Color Added" />
      <Form formRef={form} className={"p-5"}>
        <div className="mb-5">
          <Input
            type="text"
            inputRef={name}
            Value={colorName}
            className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Color name"
            error={errors.name}
          />
        </div>
        <div className="mb-3">
          <div className="color-picker">
            <HexColorPicker color={color} onChange={setColor} />
            {errors.color_code && (
              <small className=" text-red-500 px-3">{errors.color_code}</small>
            )}
          </div>
        </div>

        <div className=" text-end">
          <button
            type="button"
            onClick={() => addHandle()}
            className="text-md font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}
