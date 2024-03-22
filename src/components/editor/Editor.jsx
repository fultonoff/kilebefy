"use client";
import React, { useEffect, useState, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { tools } from "./Tools";

const Editor = () => {
  let editor = { isReady: false };
  const ref=useRef()
  const rawDocument = {
    "time" : 1550476186479,
    "blocks" : [{
      data:{
        text: 'Start editing',
        level: 3
      },
      id:'123',
      type: 'title'
    }],
    "version" : "2.8.1"
}

const [data, setData]= useState(rawDocument)

console.log(data);
  useEffect(() => {
    if (!editor.isReady) {
      editor = new EditorJS({
        tools: tools,
        holder: "editorjs",
        data: document,
        onChange: async () => {
          let content = await editor.saver?.save();
          setData(content);
          // console.log(content);
        },
      });
    }
  }, []);
console.log();
  ref.current = editor
  return (
    <div className="border">
      <div id="editorjs" className="prose lg:prose-xl min-h-full"></div>
    </div>
  );
};

export default Editor;
