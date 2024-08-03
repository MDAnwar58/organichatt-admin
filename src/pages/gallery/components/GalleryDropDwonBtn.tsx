import React, { useState } from "react";
import { Dropdown, DropdownItem } from "flowbite-react";
import {
  CopyIcon,
  FaDownloadIcon,
  HiOutlineInformationCircleIcon,
  MdDeleteIcon,
} from "../../components/Icons";
import GalleryManuBtn from "./GalleryManuBtn";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { successMsg } from "../../../notify";
import axiosClient from "../../../axios-client";
// import { saveAs } from "file-saver";

export default function GalleryDropDwonBtn({
  gallery,
  imageInfoHandler,
  deleteHandler,
}) {
  const [copied, setCopied] = useState({
    value: "",
    copied: false,
  });

  const imageDownload = async (id, image) => {
    const response = await axiosClient.get(`/gallery-image-download/${id}`, {
      responseType: "blob",
    });
    // Create a blob URL for the image
    const url = window.URL.createObjectURL(new Blob([response.data]));

    // Create a link element and trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", image);
    document.body.appendChild(link);
    setTimeout(() => {
      link.click();
      document.body.removeChild(link);
    }, 500);
  };

  const copyURL = (url) => {
    setCopied({
      value: url,
      copied: true,
    });
    successMsg("Copy to clipboard");
  };
  return (
    <Dropdown
      arrowIcon={false}
      label={<GalleryManuBtn />}
      placement="left-start"
      inline
    >
      <DropdownItem
        className=" flex items-center"
        onClick={() =>
          imageDownload(
            gallery.id,
            `${gallery.image_name}.${gallery.image_extention}`
          )
        }
      >
        <FaDownloadIcon className={"text-xl me-1"} /> Download
      </DropdownItem>
      <DropdownItem
        className=" flex items-center"
        onClick={() => imageInfoHandler(gallery.id)}
      >
        <HiOutlineInformationCircleIcon className={"text-xl me-1"} />
        info
      </DropdownItem>
      <DropdownItem onClick={() => deleteHandler(gallery.id)}>
        <MdDeleteIcon className={"text-xl me-1"} />
        Delete
      </DropdownItem>
      <CopyToClipboard text={copied.value} onCopy={() => copyURL(gallery.url)}>
        <DropdownItem>
          <CopyIcon className={"text-xl me-1"} />
          Copy URL
        </DropdownItem>
      </CopyToClipboard>
    </Dropdown>
  );
}
