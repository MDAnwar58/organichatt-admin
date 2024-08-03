import React, { Fragment, useEffect } from "react";
import TableHeader from "../../components/TableHeader";
import DataTable from "../../components/DataTable";
import LimitSelection from "./LimitSelection";
import { useSelector } from "react-redux";
import Column from "../../components/Column";
import useCategoryContext from "../context/CategoryContext";
import CategoryTableTBody from "./CategoryTableTBody";
import useGalleryContext from "../../common_context/GalleryContext";
import GalleryModal from "../../components/GalleryModal";

interface Props {
  openGalleryModal?: any;
  setOpenGalleryModal?: any;
  galleryCategoryId?: any;
  ItemHandle?: any;
  searchHandler?: any;
  paginate?: any;
  Page?: any;
  TotalPage?: any;
  imagePreviewUrl?: any;
  imageHandle?: any;
  removeImage?: any;
  imageGalleryCategoryId?: any;
  image_name?: any;
  image?: any;
  addGallery?: any;
  galleryAddForm?: any;
  tab?: any;
  setTab?: any;
  imageNameError?: any;
  setImageNameError?: any;
  imageError?: any;
  galleryId?: any;
  setGalleryId?: any;
  galleryImage?: any;
  setGalleryImage?: any;
  selectGalleryImage?: any;
  removeFile?: any;
  galleryCategories?: any;
  galleries?: any;
  openGalleryModalHandler?: any;
}

export default function CategoryContent({
  openGalleryModal,
  setOpenGalleryModal,
  galleryCategoryId,
  ItemHandle,
  searchHandler,
  paginate,
  Page,
  TotalPage,
  imagePreviewUrl,
  imageHandle,
  removeImage,
  imageGalleryCategoryId,
  image_name,
  image,
  addGallery,
  galleryAddForm,
  tab,
  setTab,
  imageNameError,
  setImageNameError,
  imageError,
  galleryId,
  setGalleryId,
  galleryImage,
  setGalleryImage,
  selectGalleryImage,
  removeFile,
  galleryCategories,
  galleries,
  openGalleryModalHandler,
}: Props) {
  const {
    getCategories,
    page,
    limit,
    totalPage,
    onPageHabdle,
    pageItemLimitHandler,
    selectItemId,
    itemHandle,
    loading,
    searchHandle,
    statusHandle,
    deleteHandle,
    icon_image_url,
    banner_url,
    addBanner,
    removeBanner,
    addIcon,
    removeIcon,
  } = useCategoryContext();

  useEffect(() => {
    getCategories();
  }, []);

  const categories = useSelector((state) => state.categories);

  const filterItems = [
    {
      id: 1,
      name: "active",
    },
    {
      id: 2,
      name: "inactive",
    },
  ];

  const checkbox = <input type="checkbox" />;
  const theadColumnName = [
    <Column name="#" />,
    <Column name="Brand Name" />,
    <Column name="Slug" />,
    <Column name="Icon" />,
    <Column name="Image" />,
    <Column name="Banner" />,
    <Column name="Status" />,
    <Column name="Action" />,
  ];

  const tbody = (
    <CategoryTableTBody
      categories={categories}
      loading={loading}
      statusHandle={statusHandle}
      deleteHandle={deleteHandle}
      page={page}
      limit={limit}
      galleryImage={galleryImage}
      setGalleryImage={setGalleryImage}
      removeFile={removeFile}
      icon_image_url={icon_image_url}
      banner_url={banner_url}
      addBanner={addBanner}
      removeBanner={removeBanner}
      addIcon={addIcon}
      removeIcon={removeIcon}
      setGalleryId={setGalleryId}
      openGalleryModalHandler={openGalleryModalHandler}
    />
  );
  const limitSelection = <LimitSelection onChange={pageItemLimitHandler} />;
  return (
    <Fragment>
      <TableHeader
        title="Category lists"
        link="/category-create"
        linkName="Create"
        linkClassName={"bg-blue-500 text-white px-5 py-1 rounded-xl"}
      />

      <DataTable
        theadColumnName={theadColumnName}
        tbody={tbody}
        page={page}
        limit={limit}
        totalPage={totalPage}
        onPageHabdle={onPageHabdle}
        limitSelection={limitSelection}
        search={true}
        filter={true}
        filterItems={filterItems}
        selectItemId={selectItemId}
        itemHandle={itemHandle}
        onChangeSearch={searchHandle}
      />

      <GalleryModal
        openGalleryModal={openGalleryModal}
        setOpenGalleryModal={setOpenGalleryModal}
        galleryCategoryId={galleryCategoryId}
        itemHandle={ItemHandle}
        galleryCategories={galleryCategories}
        galleries={galleries}
        searchHandler={searchHandler}
        paginate={paginate}
        page={Page}
        totalPage={TotalPage}
        imagePreviewUrl={imagePreviewUrl}
        imageHandle={imageHandle}
        removeImage={removeImage}
        imageGalleryCategoryId={imageGalleryCategoryId}
        image_name={image_name}
        image={image}
        addGallery={addGallery}
        galleryAddForm={galleryAddForm}
        tab={tab}
        setTab={setTab}
        imageNameError={imageNameError}
        setImageNameError={setImageNameError}
        imageError={imageError}
        galleryId={galleryId}
        selectGalleryImage={selectGalleryImage}
        setGalleryId={setGalleryId}
        setGalleryImage={setGalleryImage}
      />
    </Fragment>
  );
}
