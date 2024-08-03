import React from "react";

export default function GalleryGrid({ children, sideBar }: any) {
  return (
    <div
      className={`grid ${
        sideBar === true
          ? "7xl:grid-cols-5 2xlMiddle3xl:grid-cols-4 2lg:grid-cols-3 2xs:grid-cols-2 grid-cols-1"
          : "7xl:grid-cols-6 2xlMiddle3xl:grid-cols-5 2lg:grid-cols-4 md:grid-cols-3 2xs:grid-cols-2 grid-cols-1"
      } gap-5`}
    >
      {children}
    </div>
  );
}
