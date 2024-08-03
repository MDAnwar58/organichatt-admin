import React from "react";
import ReactCountryFlag from "react-country-flag";

export default function EnFlag({
  countryCode,
  title,
  width,
  height,
  ariaLabel,
  className,
}: {
  countryCode?: any;
  title?: any;
  width?: any;
  height?: any;
  ariaLabel?: any;
  className?: any;
}) {
  return (
    <ReactCountryFlag
      countryCode={countryCode}
      className={className}
      aria-label={ariaLabel}
      title={title}
      svg
      cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
      cdnSuffix="svg"
      style={{
        width: width,
        height: height,
      }}
    />
  );
}
