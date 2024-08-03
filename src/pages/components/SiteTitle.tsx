import React from "react";

interface Props {
  title?: any;
}

export default function SiteTitle({ title }: Props) {
  return <title>Organ Admin - {title}</title>;
}
