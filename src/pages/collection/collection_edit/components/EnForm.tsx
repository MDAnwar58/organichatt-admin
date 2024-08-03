import React from "react";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import ImageInputFile from "../../../components/ImageInputFile";

export default function EnForm({
  collection,
  name,
  form,
  updateHandle,
  errors,
}: {
  collection?: any;
  name?: any;
  form?: any;
  updateHandle?: any;
  errors?: any;
}) {
  return (
    <Form formRef={form} className={"pt-3 p-5"}>
      <div className="mb-3">
        <Input
          type="text"
          className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Brand name"
          Value={collection.name}
          inputRef={name}
          error={errors.name}
        />
      </div>

      <div className=" text-end">
        <button
          type="button"
          onClick={() => updateHandle(collection.id)}
          className="text-md font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase"
        >
          update
        </button>
      </div>
    </Form>
  );
}
