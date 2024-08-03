import React from "react";
import { Dropdown, DropdownItem, Tooltip } from "flowbite-react";
import GalleryManuBtn from "../../components/GalleryManuBtn";
import { MdDeleteIcon, RestoreIcon } from "../../../components/Icons";

export default function GalleryTrustBinDropDwonBtn({
  gallery,
  restoreHandler,
  deleteHandler,
}: any) {
  return (
    <Dropdown
      arrowIcon={false}
      label={<GalleryManuBtn />}
      placement="left-start"
      inline
    >
      <DropdownItem onClick={() => deleteHandler(gallery.id)}>
        <MdDeleteIcon className={"text-xl me-1"} />
        Delete
      </DropdownItem>
      <DropdownItem onClick={() => restoreHandler(gallery.id)}>
        <RestoreIcon className={"text-xl me-1"} />
        Restore
      </DropdownItem>
    </Dropdown>
  );
}
