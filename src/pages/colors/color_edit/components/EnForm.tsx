import React from "react";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import { HexColorPicker } from "react-colorful";
import namer from "color-namer";
import "../../../../assets/css/react-colorful.css";

interface Props {
  color?: any;
  name?: any;
  colorCode?: any;
  setColorCode?: any;
  form?: any;
  updateHandle?: any;
  errors?: any;
}

export default function EnForm({
  color,
  name,
  colorCode,
  setColorCode,
  form,
  updateHandle,
  errors,
}: Props) {
  // Use color-namer to get the color name
  let colorName;
  try {
    const result = namer(colorCode);
    colorName = result.basic[0].name;
  } catch (error) {}
  return (
    <Form formRef={form} className={"pt-3 p-5"}>
      <div className="mb-5">
        <Input
          type="text"
          className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Brand name"
          Value={colorName}
          inputRef={name}
          error={errors.name}
        />
      </div>
      <div className="mb-3">
        <div className="color-picker">
          <HexColorPicker color={colorCode} onChange={setColorCode} />
          {errors.color_code && (
            <small className=" text-red-500 px-3">{errors.color_code}</small>
          )}
        </div>
      </div>

      <div className=" text-end">
        <button
          type="button"
          onClick={() => updateHandle(color.id)}
          className="text-md font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase"
        >
          update
        </button>
      </div>
    </Form>
  );
}
