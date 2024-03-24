import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  
  export function Resizable({left, right}) {
    return (
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[85vh] w-full rounded-lg border"
      >
        <ResizablePanel defaultSize={25}>
          <div className="h-full w-full ">
            {left}
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className=" h-full w-full">
            {right}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  }
  