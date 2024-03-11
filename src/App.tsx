
import { Button } from '@/components/ui/button';
import { ResizableHandle, ResizablePanel,  ResizablePanelGroup, } from "@/components/ui/resizable";


function App() {

  return (
    <>
      <Button variant="destructive">Click me</Button>

      <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className='border'>One</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className='border'>Two</ResizablePanel>
    </ResizablePanelGroup>


    </>
  )
}

export default App
