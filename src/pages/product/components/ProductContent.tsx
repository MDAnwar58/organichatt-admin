import React, { useEffect } from "react";
import TableHeader from "../../components/TableHeader";
import { useSelector } from "react-redux";
import useProductContext from "../context/ProductContext";
import ReactDataTable from "./table/ReactDataTable";
import useGalleryContext from "../../common_context/GalleryContext";
import ProductGalleryModal from "./gallery/ProductGalleryModal";
import ProductImagesModal from "./table/ProductImagesModal";

interface Props {
  openGalleryModal?: any;
  setOpenGalleryModal?: any;
  galleryCategoryId?: any;
  itemHandle?: any;
  galleryCategories?: any;
  galleries?: any;
  searchHandler?: any;
  paginate?: any;
  page?: any;
  totalPage?: any;
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
  selectGalleryImages?: any;
  galleryImages?: any;
  galleryImageRemoveHandle?: any;
  setGalleryId?: any;
  setGalleryImage?: any;
  setGalleryImages?: any;
}

export default function ProductContent({
  openGalleryModal,
  setOpenGalleryModal,
  galleryCategoryId,
  itemHandle,
  galleryCategories,
  galleries,
  searchHandler,
  paginate,
  page,
  totalPage,
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
  selectGalleryImages,
  galleryImages,
  galleryImageRemoveHandle,
  setGalleryId,
  setGalleryImage,
  setGalleryImages,
}: Props) {
  const {
    getProducts,
    getCollections,
    getBrands,
    getCategories,
    getSubCategories,
    status,
    collection,
    brand,
    category,
    subCategory,
    statusHandle,
    onFilterHandle,
    onDeleteHandle,
    itemIds,
    setItemIds,
    selectAllItem,
    setSelectAllItem,
    onAllDelete,
    clearTableFilter,
    multipleImageAdded,
    setProductId,
    productImagesModalOpen,
    setProductImagesModalOpen,
    getProductImages,
    removeProductImage,
  } = useProductContext();
  // console.log(COLUMNS);

  useEffect(() => {
    getProducts();
    getCollections();
    getBrands();
    getCategories();
    getSubCategories();
  }, []);

  const products = useSelector((state) => state.products);
  const collections = useSelector((state) => state.collections);
  const brands = useSelector((state) => state.brands);
  const categories = useSelector((state) => state.categories);
  const sub_categories = useSelector((state) => state.sub_categories);

  const COLUMNS = [
    {
      title: "Product Name",
      field: "name",
      fieldStatus: true,
    },
    {
      title: "Slug",
      field: "slug",
      fieldStatus: true,
    },
    {
      title: "Price",
      field: "price",
      fieldStatus: true,
    },
    {
      title: "Discount Price",
      field: "discount_price",
      fieldStatus: true,
    },
    {
      title: "Collection",
      field: "collection",
      fieldStatus: true,
    },
    {
      title: "Brand",
      field: "brand",
      fieldStatus: true,
    },
    {
      title: "Category",
      field: "category",
      fieldStatus: true,
    },
    {
      title: "Sub Category",
      field: "sub_category",
      fieldStatus: true,
    },
    {
      title: "Colors",
      field: "product_colors",
      fieldStatus: true,
    },
    {
      title: "Sizes",
      field: "product_sizes",
      fieldStatus: true,
    },
    {
      title: "Size Numbers",
      field: "product_size_numbers",
      fieldStatus: true,
    },
    {
      title: "Weights",
      field: "product_weights",
      fieldStatus: true,
    },
    {
      title: "Image",
      field: "image_url",
      fieldStatus: true,
    },
    {
      title: "Status",
      field: "status",
      fieldStatus: true,
    },
    {
      title: "Images",
      field: "images",
      fieldStatus: true,
    },
  ];

  const FILTERITEMS = [
    {
      id: 1,
      filter: (
        <select
          onChange={(e) => onFilterHandle(e.target.value, "status")}
          className="w-full rounded-lg border border-1 border-gray-300 text-gray-500"
          value={status.id}
        >
          <option value="">All</option>
          <option value="1">Publish</option>
          <option value="2">Unpublish</option>
        </select>
      ),
    },
    {
      id: 2,
      filter: (
        <select
          onChange={(e) => onFilterHandle(e.target.value, "collection")}
          className="w-full rounded-lg border border-1 border-gray-300 text-gray-500"
          value={collection.id}
        >
          <option value="">Collection choose</option>
          {collections.length > 0 &&
            collections.map((collection) => (
              <option key={collection.id} value={collection.id}>
                {collection.name}
              </option>
            ))}
        </select>
      ),
    },
    {
      id: 3,
      filter: (
        <select
          onChange={(e) => onFilterHandle(e.target.value, "brand")}
          className="w-full rounded-lg border border-1 border-gray-300 text-gray-500"
          value={brand.id}
        >
          <option value="">Brand choose</option>
          {brands.length > 0 &&
            brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
        </select>
      ),
    },
    {
      id: 4,
      filter: (
        <select
          onChange={(e) => onFilterHandle(e.target.value, "category")}
          className="w-full rounded-lg border border-1 border-gray-300 text-gray-500"
          value={category.id}
        >
          <option value="">Category choose</option>
          {categories.length > 0 &&
            categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
        </select>
      ),
    },
    {
      id: 5,
      filter: (
        <select
          onChange={(e) => onFilterHandle(e.target.value, "sub_category")}
          className="w-full rounded-lg border border-1 border-gray-300 text-gray-500"
          value={subCategory.id}
        >
          <option value="">Sub Category choose</option>
          {sub_categories.length > 0 &&
            sub_categories.map((sub_category) => (
              <option key={sub_category.id} value={sub_category.id}>
                {sub_category.name}
              </option>
            ))}
        </select>
      ),
    },
  ];

  const handleSelectAllChange = (items) => {
    setSelectAllItem(!selectAllItem);
    if (!selectAllItem) {
      const allItemIds = items.map((item) => item.id);
      setItemIds(allItemIds);
    } else {
      setItemIds([]);
    }
  };
  const onSelectItem = (itemId, items) => {
    setItemIds((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId) !== false) {
        // Unselect the item
        prevSelectedItems.includes(itemId);
        const updatedItems = prevSelectedItems.filter((id) => id !== itemId);
        if (updatedItems.length !== items.length) {
          setSelectAllItem(false);
        }
        return updatedItems;
      } else {
        // Select the item
        const updatedItems = [...prevSelectedItems, itemId];
        if (updatedItems.length === items.length) {
          setSelectAllItem(true);
        }
        return updatedItems;
      }
    });
  };

  const onImagesHandle = (id) => {
    setProductImagesModalOpen(true);
    setProductId(id);
    getProductImages(id);
  };

  return (
    <div>
      <TableHeader
        title="Product lists"
        link="/product-create"
        linkName="Create"
        linkClassName={"bg-blue-500 text-white px-5 py-1 rounded-xl"}
      />

      <ReactDataTable
        items={products}
        Columns={COLUMNS}
        columnItemCount={2}
        actionColumn={true}
        viewHrefText="view"
        viewHrefLink="/product-view/"
        viewClassName="text-blue-300"
        editHrefText="edit"
        editHrefLink="/product-edit/"
        editClassName="text-blue-500 ms-1"
        deleteButtonText="delete"
        onDelete={onDeleteHandle}
        deleteButtonClassName="text-red-500 ms-1"
        selectedBox
        onSelectAll={handleSelectAllChange}
        selectAllItem={selectAllItem}
        onSelectItem={onSelectItem}
        itemIds={itemIds}
        onAllDelete={onAllDelete}
        onStatusChange={statusHandle}
        tableFilterItems={FILTERITEMS}
        clearTableFilter={clearTableFilter}
        onImagesHandle={onImagesHandle}
        perPageLimit={5}
        setGalleryImages={setGalleryImages}
      />

      <ProductImagesModal
        productImagesModalOpen={productImagesModalOpen}
        setProductImagesModalOpen={setProductImagesModalOpen}
        setOpenGalleryModal={setOpenGalleryModal}
        galleryImages={galleryImages}
        galleryImageRemoveHandle={galleryImageRemoveHandle}
        multipleImageAdded={multipleImageAdded}
        setGalleryImages={setGalleryImages}
        removeProductImage={removeProductImage}
      />

      <ProductGalleryModal
        openGalleryModal={openGalleryModal}
        setOpenGalleryModal={setOpenGalleryModal}
        galleryCategoryId={galleryCategoryId}
        itemHandle={itemHandle}
        galleryCategories={galleryCategories}
        galleries={galleries}
        searchHandler={searchHandler}
        paginate={paginate}
        page={page}
        totalPage={totalPage}
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
        selectGalleryImages={selectGalleryImages}
        galleryImages={galleryImages}
        setGalleryId={setGalleryId}
        setGalleryImage={setGalleryImage}
      />
    </div>
  );
}
