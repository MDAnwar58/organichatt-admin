import React from "react";

export default function Form({
  children,
  formRef,
  className,
}: {
  children?: any;
  formRef?: any;
  className?: any;
}) {
  return (
    <div className={className}>
      <form ref={formRef} className="max-w-sm mx-auto">
        {children}
      </form>
    </div>
  );
}
