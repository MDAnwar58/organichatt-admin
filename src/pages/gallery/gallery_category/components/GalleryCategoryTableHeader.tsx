import React from "react";
import { Button } from "flowbite-react";

export default function GalleryCategoryTableHeader({ setOpenModal }: any) {
  return (
    <div className=" flex justify-between mb-2">
      <h1 className=" text-xl font-mono font-semibold text-gray-600 dark:text-white">
        Gallery Category List
      </h1>
      <Button
        onClick={() => setOpenModal(true)}
        gradientDuoTone="purpleToBlue"
        size="sm"
      >
        Create
      </Button>
    </div>
  );
}
