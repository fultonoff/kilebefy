'use client'
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import {WelcomeScreen, MainMenu} from '@excalidraw/excalidraw'
const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
    loading: () => <p>Loading...</p>
  }
);

const Canvas = ({whiteboardData}) => {
    const [whiteboard, setWhiteboard]= useState()
  return (
    <Suspense fallback={<p>Loading...</p>}>
    {whiteboardData &&  
    
    
    
    <Excalidraw
    initialData={
        {
            elements: JSON.parse(whiteboardData)
        }
    }
      UIOptions={
        {
            canvasActions:{
                links:false
            }
        }
      }
      onDock={true}
      
        onChange={(excalidrawElements, appState, files) =>
            setWhiteboard(excalidrawElements)
        }

        className="custom-styles"
      >
        <input type="hidden" name='whiteboard' value={JSON.stringify(whiteboard)}/>
        <WelcomeScreen>
            <WelcomeScreen.Hints.MenuHint/>
            <WelcomeScreen.Hints.ToolbarHint/>
            <WelcomeScreen.Hints.HelpHint/>
            
        </WelcomeScreen>
        <MainMenu>
            <MainMenu.DefaultItems.ClearCanvas/>
            <MainMenu.DefaultItems.Export/>
            <MainMenu.DefaultItems.SaveAsImage/>
            <MainMenu.DefaultItems.LoadScene/>
            <MainMenu.DefaultItems.SaveToActiveFile/>
            <MainMenu.DefaultItems.ToggleTheme/>
            <MainMenu.DefaultItems.ChangeCanvasBackground/>
        </MainMenu>
      </Excalidraw>
    
    }  
    
    </Suspense>
  );
};

export default Canvas;
