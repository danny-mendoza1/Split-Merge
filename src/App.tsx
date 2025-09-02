import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PDFDocument } from "pdf-lib";

function App() {
  const [count, setCount] = useState(1);

  function handleClick() {
    setCount(count + 1);
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>){
    event.preventDefault();
  }

  async function handleDrop(event: React.DragEvent<HTMLDivElement>){
    event.preventDefault();
    console.log("something in the drop zone")
    setCount(count + 1)
    const files = [...event.dataTransfer.files]
    await processFiles(files)
  }

  async function processFiles(files: File[]){
    const buffers = await Promise.all(files.map(file => file.arrayBuffer()));
    const bytes = buffers[0]
    const pdfDoc = await PDFDocument.load(bytes)
    const pages = pdfDoc.getPageCount()
    console.log(pages)
  }



  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Split or Merge make your choice</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <div onDragOver={handleDragOver} onDrop={handleDrop} className="drop-zone">
          <p>
            Drag one or more files to this <i>drop zone</i>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
