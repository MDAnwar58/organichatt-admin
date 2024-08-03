import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoIosCopy } from "react-icons/io";
import { FaRegImage } from "react-icons/fa6";
import { MdRestore } from "react-icons/md";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { HiCollection } from "react-icons/hi";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareCheck } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { FaStarOfLife } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";

export const DarkModeIcon = ({ className }: { className?: any }) => {
  return <MdDarkMode className={className} />;
};
export const LightModeIcon = ({ className }: { className?: any }) => {
  return <MdOutlineLightMode className={className} />;
};
export const DotsThreeOutlineIcon = ({ className }: { className?: any }) => {
  return <PiDotsThreeOutlineVerticalBold className={className} />;
};
export const FaDownloadIcon = ({ className }: { className?: any }) => {
  return <FaCloudDownloadAlt className={className} />;
};
export const HiOutlineInformationCircleIcon = ({
  className,
}: {
  className?: any;
}) => {
  return <IoInformationCircleOutline className={className} />;
};
export const MdDeleteIcon = ({ className }: { className?: any }) => {
  return <MdDelete className={className} />;
};
export const FilterIcon = ({ className }: { className?: any }) => {
  return <CiFilter className={className} />;
};
export const CheckIcon = ({ className }: { className?: any }) => {
  return <FaCheck className={className} />;
};
export const RemoveIcon = ({ className }: { className?: any }) => {
  return <RxCross2 className={className} />;
};
export const CopyIcon = ({ className }: { className?: any }) => {
  return <IoIosCopy className={className} />;
};
export const RegImage = ({ className }: { className?: any }) => {
  return <FaRegImage className={className} />;
};
export const RestoreIcon = ({ className }: { className?: any }) => {
  return <MdRestore className={className} />;
};
export const UpArrowIcon = ({ className }: { className?: any }) => {
  return <FaArrowUpShortWide className={className} />;
};
export const DownArrowIcon = ({ className }: { className?: any }) => {
  return <FaArrowDownWideShort className={className} />;
};
export const CollectionIcon = ({ className }: { className?: any }) => {
  return <HiCollection className={className} />;
};
export const SquarePlusIcon = ({ className }: { className?: any }) => {
  return <CiSquarePlus className={className} />;
};
export const SquareCheckIcon = ({ className }: { className?: any }) => {
  return <CiSquareCheck className={className} />;
};
export const PlusIcon = ({ className }: { className?: any }) => {
  return <FaPlus className={className} />;
};
export const StarIcon = ({ className }: { className?: any }) => {
  return <FaStarOfLife className={className} />;
};
export const ViewGridAddIcon = ({ className }: { className?: any }) => {
  return <HiViewGridAdd className={className} />;
};
