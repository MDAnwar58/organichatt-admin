import React, { Fragment } from "react";
import { useRef, useState } from "react";
import GalleryCategoryTableHeader from "./GalleryCategoryTableHeader";
import GalleryCategoryTable from "./GalleryCategoryTable";
import { GalleryCategoryCreateModal } from "./GalleryCategoryCreateModal";

export default function GalleryCategoryContent() {
  const [openModal, setOpenModal] = useState(false);
  const galleryCategoryNameInputRef = useRef<HTMLInputElement>(null);
  const galleryCategoryForm = useRef();
  return (
    <Fragment>
      <GalleryCategoryTableHeader setOpenModal={setOpenModal} />
      <GalleryCategoryTable />
      <GalleryCategoryCreateModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        galleryCategoryNameInputRef={galleryCategoryNameInputRef}
        galleryCategoryForm={galleryCategoryForm}
      />
    </Fragment>
  );
}
