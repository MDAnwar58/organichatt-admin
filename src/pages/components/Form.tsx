import React from "react";

export default function Form({
   children,
   formRef,
   className,
   onSubmit,
}: {
   children?: any;
   formRef?: any;
   className?: any;
   onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
}) {
   return (
      <div className={className}>
         <form onSubmit={onSubmit} ref={formRef} className="">
            {children}
         </form>
      </div>
   );
}
