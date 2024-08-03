import React, { Fragment } from "react";
import { StarIcon } from "./Icons";

interface Props {
  label?: any;
  labelHtmlFor?: any;
  selectedValue?: any;
  children?: any;
  inputRef?: any;
  className?: any;
  error?: any;
  disabled?: boolean;
  onChange?: any;
  required?: boolean;
}

export default function Select({
  label,
  labelHtmlFor,
  selectedValue,
  children,
  inputRef,
  className,
  error,
  disabled,
  onChange,
  required,
}: Props) {
  return (
    <Fragment>
      {label && <label htmlFor={labelHtmlFor}>{label}</label>}
      <select
        ref={inputRef}
        className={className}
        value={selectedValue}
        disabled={disabled}
        onChange={onChange}
      >
        {children}
      </select>
      {required && <StarIcon className="text-red-500 ms-2 text-xs" />}
      {error && <small className=" text-red-500 px-3">{error}</small>}
    </Fragment>
  );
}
