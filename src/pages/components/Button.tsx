import React from "react";

export default function Button({
  children,
  type,
  className,
  onClick,
}: {
  children?: any;
  type?: any;
  className?: any;
  onClick?: any;
}) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
