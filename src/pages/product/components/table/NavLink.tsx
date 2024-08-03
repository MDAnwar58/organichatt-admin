import React from "react";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  href?: any;
  className?: any;
}

export default function NavLink({ children, href, className }: Props) {
  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}
