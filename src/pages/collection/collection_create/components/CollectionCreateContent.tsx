import React, { Fragment, useEffect } from "react";
import GalleryModal from "../../../components/GalleryModal";
import useGalleryContext from "../../../common_context/GalleryContext";
import { Provider, useSelector } from "react-redux";
import store from "../apiCalling/store";
import CollectionForm from "./CollectionForm";

export default function CollectionCreateContent() {
  return (
    <Fragment>
      <Provider store={store}>
        <CollectionForm />
      </Provider>
    </Fragment>
  );
}
