import React, { Fragment, useState } from "react";
import ToogleCheckBox from "./ToogleCheckBox";
import Input from "./Input";
import Select from "./Select";
import { MdDeleteIcon, PlusIcon } from "./Icons";
import { useLocation } from "react-router-dom";

interface Props {
  label?: any;
  onChangeToogleCheck?: any;
  defaultChecked?: any;
  disabled?: boolean;
  options?: any;
  onBtnClick?: any;
  fields?: any;
  onChangeSelect?: any;
  onChangePrice?: any;
  onChangeDiscountPrice?: any;
  onClickFieldRemoveHandle?: any;
  removeItemName?: any;
}

export default function MultipleInputAdd({
  label,
  onChangeToogleCheck,
  defaultChecked,
  disabled,
  options,
  onBtnClick,
  fields,
  onChangeSelect,
  onChangePrice,
  onChangeDiscountPrice,
  onClickFieldRemoveHandle,
  removeItemName,
}: Props) {
  const { pathname } = useLocation();
  const selectedOption = (optionId: any) => {
    return optionId;
  };
  return (
    <Fragment>
      <div className="flex justify-between items-center">
        <label
          // htmlFor={detectOptionWithlabel}
          className="block mb-2 text-xl font-medium text-gray-500 dark:text-white"
        >
          {label}
        </label>

        <ToogleCheckBox
          onChange={onChangeToogleCheck}
          defaultChecked={defaultChecked}
        />
      </div>
      {fields.map((field, index) => (
        <div key={index} className="grid grid-cols-3 gap-x-2 mb-1">
          <div>
            <Select
              className={`${
                disabled ? "bg-gray-300" : "bg-gray-50"
              } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              disabled={disabled}
              onChange={(event) => onChangeSelect(index, event)}
              selectedValue={selectedOption(
                field.size_id
                  ? field.size_id
                  : field.size_number_id
                  ? field.size_number_id
                  : field.weight_id
              )}
            >
              <option>choose</option>
              {options ? (
                options.map((option) => (
                  <option value={option.id} key={option.id}>
                    {option.number
                      ? `${option.number}${option.weight}`
                      : option.name}
                  </option>
                ))
              ) : (
                <option>size not found</option>
              )}
            </Select>
          </div>
          <div>
            <Input
              type="text"
              className={`px-5 ${
                disabled ? "bg-gray-300" : "bg-gray-50"
              } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="price..."
              disabled={disabled}
              // Value={field.price}
              onChange={(event) => onChangePrice(index, event)}
              Value={field.price}
            />
          </div>
          <div className=" flex items-center">
            <Input
              type="text"
              className={`px-5 ${
                disabled ? "bg-gray-300" : "bg-gray-50"
              } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="discount price..."
              disabled={disabled}
              // Value={field.discount_price}
              onChange={(event) => onChangeDiscountPrice(index, event)}
              Value={field.discount_price}
            />
            {pathname === "/product-create"
              ? fields.length > 1 && (
                  <div className="ps-1">
                    <button
                      type="button"
                      className="text-red-500 border border-red-500 rounded-lg p-1"
                      onClick={() =>
                        onClickFieldRemoveHandle(index, removeItemName)
                      }
                    >
                      <MdDeleteIcon />
                    </button>
                  </div>
                )
              : fields.length > 0 && (
                  <div className="ps-1">
                    <button
                      type="button"
                      className="text-red-500 border border-red-500 rounded-lg p-1"
                      onClick={() =>
                        onClickFieldRemoveHandle(index, removeItemName)
                      }
                    >
                      <MdDeleteIcon />
                    </button>
                  </div>
                )}
          </div>
        </div>
      ))}
      <div className="pt-1">
        <button
          type="button"
          onClick={onBtnClick}
          className={`w-full flex justify-center ${
            disabled ? "bg-gray-300" : "bg-gray-50"
          } text-gray-700 border drop-shadow-sm rounded-lg py-[0.40rem]`}
          disabled={disabled}
        >
          <PlusIcon />
        </button>
      </div>
    </Fragment>
  );
}
