import React from "react";

export default function Image({
  src,
  alt,
  className,
}: {
  src?: any;
  alt?: any;
  className?: any;
}) {
  return <img src={src} alt={alt} className={className} />;
}
