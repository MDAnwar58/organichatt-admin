import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addData,
  getData,
  get_brands,
  get_categories,
  get_collections,
  get_colors,
  get_size_numbers,
  get_sizes,
  get_sub_categories,
  get_weights,
  updateData,
} from "../../apiCalling/action";
import { useNavigate } from "react-router-dom";

interface Size {
  size_id: any;
  price: string;
  discount_price: string;
}
interface SizeNumber {
  size_number_id: any;
  price: string;
  discount_price: string;
}
interface Weight {
  weight_id: any;
  price: string;
  discount_price: string;
}

export default function useProductEditContext() {
  const name = useRef();
  const title = useRef();
  const price = useRef();
  const discount_price = useRef();
  const perchese_quantity = useRef();
  const available_quantity = useRef();
  const image_url = useRef();
  const [refundable, setRefundable] = useState("yes");
  const collection_id = useRef();
  const brand_id = useRef();
  const category_id = useRef();
  const sub_category_id = useRef();
  const des = useRef();
  const [colorIds, setColorIds] = useState([]);
  const [Sizes, setSizes] = useState<Size[]>([
    { size_id: "", price: "", discount_price: "" },
  ]);
  const [SizeNumbers, setSizeNumbers] = useState<SizeNumber[]>([
    { size_number_id: "", price: "", discount_price: "" },
  ]);
  const [Weights, setWeights] = useState<Weight[]>([
    { weight_id: "", price: "", discount_price: "" },
  ]);
  const specification = useRef();

  // seo
  const [tags, setTags] = useState([]);
  const meta_title = useRef();
  const meta_des = useRef();
  const [status, setStatus] = useState("");
  const form = useRef();
  // disable or enable
  const [collectionDisabled, setCollectionDisabled] = useState(true);
  const [brandDisabled, setBrandDisabled] = useState(true);
  const [categoryDisabled, setCategoryDisabled] = useState(true);
  const [subCategoryDisabled, setSubCategoryDisabled] = useState(true);
  const [colorDisabled, setColorDisabled] = useState(true);
  const [sizeDisabled, setSizeDisabled] = useState(true);
  const [sizeNumberDisabled, setSizeNumberDisabled] = useState(true);
  const [weightDisabled, setWeightDisabled] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getCollections = () => {
    dispatch(get_collections());
  };
  const getBrands = () => {
    dispatch(get_brands());
  };
  const getCategories = () => {
    dispatch(get_categories());
  };
  const getSubCategories = () => {
    dispatch(get_sub_categories());
  };
  const getColors = () => {
    dispatch(get_colors());
  };
  const getSizes = () => {
    dispatch(get_sizes());
  };
  const getSizeNumbers = () => {
    dispatch(get_size_numbers());
  };
  const getWeights = () => {
    dispatch(get_weights());
  };

  const colorSelectHandle = (colorId) => {
    const selectedColorId = colorId;
    setColorIds((prevIds) => {
      if (prevIds.includes(selectedColorId)) {
        return prevIds.filter((id) => id !== selectedColorId);
      } else {
        return [...prevIds, selectedColorId];
      }
    });
  };

  const getProduct = (
    id: any,
    setGalleryImage: any,
    setCollectionDisabled: any,
    setBrandDisabled: any,
    setCategoryDisabled: any,
    setSubCategoryDisabled: any,
    setColorDisabled: any,
    setSizeDisabled: any,
    setSizeNumberDisabled: any,
    setWeightDisabled: any,
    setColorIds: any,
    setSizes: any,
    setSizeNumbers: any,
    setWeights: any,
    setTags: any
  ) => {
    dispatch(
      getData(
        id,
        setGalleryImage,
        setCollectionDisabled,
        setBrandDisabled,
        setCategoryDisabled,
        setSubCategoryDisabled,
        setColorDisabled,
        setSizeDisabled,
        setSizeNumberDisabled,
        setWeightDisabled,
        setColorIds,
        setSizes,
        setSizeNumbers,
        setWeights,
        setTags
      )
    );
  };

  const removeFieldHandler = async (index: number, fieldItemName?: string) => {
    if (fieldItemName === "size") {
      const newFields = Sizes.filter((_, i) => i !== index);
      setSizes(newFields);
    } else if (fieldItemName === "size_number") {
      const newFields = SizeNumbers.filter((_, i) => i !== index);
      setSizeNumbers(newFields);
    } else {
      const newFields = Weights.filter((_, i) => i !== index);
      setWeights(newFields);
    }
  };

  const updateProduct = (e: React.FormEvent, id: string) => {
    const payload = {
      name: name.current.value,
      title: title.current.value,
      price: price.current.value,
      discount_price: discount_price.current.value,
      perchese_quantity: perchese_quantity.current.value,
      available_quantity: available_quantity.current.value,
      image_url: image_url.current.value,
      refundable: refundable,
      collection_id: collection_id.current.value,
      brand_id: brand_id.current.value,
      category_id: category_id.current.value,
      sub_category_id: sub_category_id.current.value,
      description: des.current.value,
      color_ids: colorIds,
      sizes: Sizes,
      size_numbers: SizeNumbers,
      weights: Weights,
      specification: specification.current.value,
      // seo
      tags: tags,
      meta_title: meta_title.current.value,
      meta_description: meta_des.current.value,
      status: e.target.value,
    };
    dispatch(updateData(id, payload, form, navigate));
  };
  return {
    getCollections,
    getBrands,
    getCategories,
    getSubCategories,
    getColors,
    getSizes,
    getSizeNumbers,
    getWeights,
    getProduct,
    colorSelectHandle,
    collectionDisabled,
    setCollectionDisabled,
    brandDisabled,
    setBrandDisabled,
    categoryDisabled,
    setCategoryDisabled,
    subCategoryDisabled,
    setSubCategoryDisabled,
    colorDisabled,
    setColorDisabled,
    sizeDisabled,
    setSizeDisabled,
    sizeNumberDisabled,
    setSizeNumberDisabled,
    weightDisabled,
    setWeightDisabled,
    name,
    title,
    price,
    discount_price,
    perchese_quantity,
    available_quantity,
    image_url,
    setRefundable,
    collection_id,
    brand_id,
    category_id,
    sub_category_id,
    des,
    colorIds,
    setColorIds,
    Sizes,
    setSizes,
    SizeNumbers,
    setSizeNumbers,
    Weights,
    setWeights,
    tags,
    setTags,
    meta_title,
    meta_des,
    specification,
    setStatus,
    form,
    removeFieldHandler,
    updateProduct,
  };
}
