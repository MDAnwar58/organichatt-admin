import React, { Fragment } from "react";
import { StarIcon } from "./Icons";

interface Props {
  label?: any;
  labelHtmlFor?: any;
  type?: any;
  Value?: any;
  className?: any;
  inputRef?: any;
  onChange?: any;
  onClick?: any;
  disabled?: boolean;
  placeholder?: any;
  error?: any;
  errorHandler?: any;
  required?: boolean;
}

export default function Input({
  label,
  labelHtmlFor,
  type,
  Value,
  className,
  inputRef,
  onChange,
  onClick,
  disabled,
  placeholder,
  error,
  errorHandler,
  required,
}: Props) {
  return (
    <Fragment>
      {label && <label htmlFor={labelHtmlFor}>{label}</label>}
      <div className={`${required && "flex items-center"}`}>
        <input
          type={type}
          ref={inputRef}
          onChange={onChange}
          onClick={onClick}
          className={className}
          defaultValue={Value}
          disabled={disabled}
          placeholder={placeholder}
        />
        {required && <StarIcon className="text-red-500 ms-2 text-xs" />}
      </div>
      {error && errorHandler === true && (
        <small className=" text-red-500 px-3">{error}</small>
      )}
      {error && <small className=" text-red-500 px-3">{error}</small>}
    </Fragment>
  );
}
