"use client";
import React, { useEffect, useState, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { tools } from "./Tools";
import { updateFile } from "@/actions/updateFile";

const Editor = ({document}) => {
  let editor = { isReady: false };

  console.log('doc', document);
  const ref=useRef()
  const rawDocument = document

const [data, setData]= useState(rawDocument)

console.log(data);
  useEffect(() => {
    if (!editor.isReady) {
      editor = new EditorJS({
        placeholder: 'Let`s write an awesome story!',
        tools: tools,
        holder: "editorjs",
        data: JSON.parse(data),
        onChange: async () => {
          let content = await editor.saver?.save();
          setData(content);
          console.log('json',JSON.stringify(content));
        },
      });
    }
  }, []);
console.log();
  ref.current = editor
  return (
    <div className="overflow-y-auto overflow-x-hidden p-2 min-w-full ">
      <div id="editorjs" className="prose min-h-full dark:invert"></div>
      <input type="hidden" value={JSON.stringify(data)} name="document" />
    </div>
  );
};

export default Editor;
