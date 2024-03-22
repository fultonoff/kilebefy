
import Header from "@editorjs/header";
import SimpleImage from "@editorjs/simple-image";
import Checklist from "@editorjs/checklist";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import Underline from "@editorjs/underline";
import ChangeCase from "editorjs-change-case";
import Tooltip from "editorjs-tooltip";
const AlignmentTuneTool = require("editorjs-text-alignment-blocktune");
import Title from "title-editorjs";
import Delimiter from "@editorjs/delimiter";
import Alert from "editorjs-alert";
const ColorPlugin = require("editorjs-text-color-plugin");
const ImageGallery = require("@rodrigoodhin/editorjs-image-gallery");
import Table from "@editorjs/table";
import CodeTool from "@rxpm/editor-js-code";
import CodeBox from "@bomdi/codebox";
import editorjsCodeflask from "@calumk/editorjs-codeflask";
import editorjsNestedChecklist from '@calumk/editorjs-nested-checklist';

export const tools= {
    nestedchecklist : editorjsNestedChecklist,
    code: editorjsCodeflask,
    codeBox: {
      class: CodeBox,
      config: {
        themeURL:
          "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/dracula.min.css", // Optional
        themeName: "atom-one-dark", // Optional
        useDefaultTheme: "light", // Optional. This also determines the background color of the language select drop-down
      },
    },
    code: {
      class: CodeTool,
      config: {
        modes: {
          js: "JavaScript",
          py: "Python",
          go: "Go",
          cpp: "C++",
          cs: "C#",
          md: "Markdown",
        },
        defaultMode: "go",
      },
    },
    table: Table,
    imageGallery: ImageGallery,
    alert: Alert,
    delimiter: Delimiter,

    title: Title,
    list: {
      class: List,
      inlineToolbar: true,
    },
    header: {
      class: Header,
      tunes: ["anyTuneName"],
    },

    anyTuneName: {
      class: AlignmentTuneTool,
      config: {
        default: "left",
        blocks: {
          header: "center",
          list: "right",
        },
      },
    },
    Color: {
      class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
      config: {
        colorCollections: [
          "#EC7878",
          "#9C27B0",
          "#673AB7",
          "#3F51B5",
          "#0070FF",
          "#03A9F4",
          "#00BCD4",
          "#4CAF50",
          "#8BC34A",
          "#CDDC39",
          "#FFF",
        ],
        defaultColor: "#FF1300",
        type: "text",
        customPicker: true, // add a button to allow selecting any colour
      },
    },
    Marker: {
      class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
      config: {
        defaultColor: "#FFBF00",
        type: "marker",
        icon: `<svg fill="#000000" height="200px" width="200px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.6,6L6.9,16.7c-0.2,0.2-0.3,0.4-0.3,0.6L6,23.9c0,0.3,0.1,0.6,0.3,0.8C6.5,24.9,6.7,25,7,25c0,0,0.1,0,0.1,0l6.6-0.6 c0.2,0,0.5-0.1,0.6-0.3L25,13.4L17.6,6z"></path> <path d="M26.4,12l1.4-1.4c1.2-1.2,1.1-3.1-0.1-4.3l-3-3c-0.6-0.6-1.3-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9L19,4.6L26.4,12z"></path> </g> <g> <path d="M28,29H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S28.6,29,28,29z"></path> </g> </g></svg>`,
      },
    },
    tooltip: {
      class: Tooltip,
      config: {
        location: "left",
        underline: true,
        placeholder: "Enter a tooltip",
        highlightColor: "#FFEFD5",
        backgroundColor: "#16A34A",
        textColor: "#FDFEFE",
        holder: "editorId",
      },
    },
    changeCase: {
      class: ChangeCase,
      config: {
        showLocaleOption: true, // enable locale case options
        locale: "tr", // or ['tr', 'TR', 'tr-TR']
      },
    },
    underline: Underline,
    Marker: {
      class: Marker,
      shortcut: "CMD+SHIFT+M",
    },
    quote: Quote,
    image: SimpleImage,
    header: Header,
    checklist: {
      class: Checklist,
      inlineToolbar: true,
    },
    embed: Embed,
    list: {
      class: List,
      inlineToolbar: true,
      config: {
        defaultStyle: "ordered",
      },
    },
  }