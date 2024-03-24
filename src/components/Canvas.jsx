import dynamic from "next/dynamic";
import { Suspense } from "react";
import {WelcomeScreen} from '@excalidraw/excalidraw'
const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
    loading: () => <p>Loading...</p>
  }
);

const Canvas = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Excalidraw
      onDock={true}
      
        onChange={(excalidrawElements, appState, files) =>
            console.log(excalidrawElements)
        }
      >

        <WelcomeScreen />
      </Excalidraw>
    </Suspense>
  );
};

export default Canvas;
