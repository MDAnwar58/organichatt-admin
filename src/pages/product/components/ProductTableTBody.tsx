import React from "react";
import { Link } from "react-router-dom";
import DataNotFound from "../../components/DataNotFound";
import Loading from "../../components/Loading";

interface Props {
  products?: any;
  loading?: boolean;
  statusHandle?: any;
  deleteHandle?: any;
  page?: any;
  limit?: any;
  sortBy?: any;
}

export default function ProductTableTBody({
  products,
  loading,
  statusHandle,
  deleteHandle,
  page,
  limit,
  sortBy,
}: Props) {
  return (
    <tbody>
      {products.length > 0 ? (
        products.map((product, index) => (
          <tr
            key={
              sortBy === "desc"
                ? index + 1 + (page - 1) * limit
                : products.length - index - (page - 1) * limit
            }
            // {length - index - (page - 1) * limit}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center"
          >
            <td className="px-6 py-4">
              {sortBy === "desc"
                ? index + 1 + (page - 1) * limit
                : products.length - index - (page - 1) * limit}
            </td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {product.name}
            </td>
            <td className="px-6 py-4">{product.slug}</td>
            <td
              className={`px-6 py-4 ${product.discount_price && "underline"}`}
            >
              {product.price}tk
            </td>
            <td className="px-6 py-4">
              {product.discount_price ? product.discount_price + "tk" : "---"}
            </td>
            <td className="px-6 py-4">
              {product.collection ? product.collection.name : "---"}
            </td>
            <td className="px-6 py-4">
              {product.brand ? product.brand.name : "---"}
            </td>
            <td className="px-6 py-4">
              {product.category ? product.category.name : "---"}
            </td>
            <td className="px-6 py-4">
              {product.sub_category ? product.sub_category.name : "---"}
            </td>
            <td className="px-6 py-4">
              {product.product_colors.length > 0
                ? product.product_colors.map((color, index) => (
                    <div
                      key={color.id}
                      className={` rounded-md ${
                        color.color.name === "white"
                          ? "text-gray-950"
                          : "text-white"
                      } `}
                      style={{ backgroundColor: color.color.color_code }}
                    >
                      {color.color.name}
                    </div>
                  ))
                : "---"}
            </td>
            <td className="px-6 py-4">
              {product.product_sizes.length > 0
                ? product.product_sizes.map((product_size, index) => (
                    <div key={product_size.id}>{product_size.size.name}</div>
                  ))
                : "---"}
            </td>
            <td className="px-6 py-4">
              {product.product_size_numbers.length > 0
                ? product.product_size_numbers.map(
                    (product_size_number, index) => (
                      <div key={product_size_number.id}>
                        {product_size_number.size_number.name}
                      </div>
                    )
                  )
                : "---"}
            </td>
            <td className="px-6 py-4">
              {product.product_weights.length > 0
                ? product.product_weights.map((product_weight, index) => (
                    <div key={product_weight.id} className="flex">
                      {product_weight.weight.number}
                      {product_weight.weight.weight}
                      <span> {index + 1 >= 1 && " ,"}</span>
                    </div>
                  ))
                : "---"}
            </td>
            <td className=" py-4">
              <img src={product.image_url} className="" alt="" />
            </td>
            <td className="px-6 py-4">
              {product.status === "publish" ? (
                <small
                  onClick={() => statusHandle(product.id)}
                  className=" bg-green-300 text-white rounded-xl text-sm font-semibold px-3 pb-[.15rem] cursor-pointer"
                >
                  Publish
                </small>
              ) : (
                <small
                  onClick={() => statusHandle(product.id)}
                  className=" bg-red-300 text-white rounded-xl text-sm font-semibold px-3 pb-[.15rem] cursor-pointer"
                >
                  Unpublish
                </small>
              )}
            </td>
            <td className="px-6 py-4">
              <Link
                to={`/product-edit/${product.id}`}
                className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
              <button
                type="button"
                onClick={() => deleteHandle(product.id)}
                className=" font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : loading === true ? (
        <Loading colSpan={14} height={20} />
      ) : (
        <DataNotFound colSpan={14} />
      )}
    </tbody>
  );
}
