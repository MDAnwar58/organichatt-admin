import React, { useEffect, useState } from "react";
import JoditEditor from "jodit-pro-react";

interface Props {
  config: any;
  textEditorRef: any;
  value: any;
}

export default function TextEditor({ config, textEditorRef, value }: Props) {
  // useEffect(() => {
  //   const editorInstance = textEditorRef.current?.editor;

  //   const handleBeforeLoad = () => {
  //     console.log("Editor is about to load");
  //   };

  //   const handleDestroy = () => {
  //     console.log("Editor is being destroyed");
  //   };

  //   if (editorInstance) {
  //     editorInstance.events.on("beforeLoad", handleBeforeLoad);
  //     editorInstance.events.on("destroy", handleDestroy);
  //   }

  //   return () => {
  //     if (editorInstance) {
  //       editorInstance.events.off("beforeLoad", handleBeforeLoad);
  //       editorInstance.events.off("destroy", handleDestroy);
  //     }
  //   };
  // }, [textEditorRef]);
  return <JoditEditor ref={textEditorRef} config={config} value={value} />;
}
