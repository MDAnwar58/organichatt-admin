import React from "react";
import { Helmet } from "react-helmet";

export default function Metadata({
   mainTtile = "Organic Admin",
   title,
   description = "",
}) {
   return (
      <Helmet>
         <meta charSet="utf-8" />
         <title>
            {mainTtile} - {title}
         </title>
         <meta name="description" content={description} />
      </Helmet>
   );
}
