const button = document.querySelector("#toggle");
const dropZone = document.querySelector("#drop-zone");
const inputFile = document.querySelector("#input-file");


// button.addEventListener("click", (event) => {
//   const text = document.querySelector("#mainText");
//   console.log(text.innerHTML);
//   if (text.innerHTML === "Hello World") {
//     text.innerHTML = "Hello Universe";
//   } else {
//     text.innerHTML = "Hello World";
//   }-
// });

dropZone.addEventListener("drop", dropHandler)
dropZone.addEventListener("dragover", dragOverHandler)
inputFile.addEventListener("change", handleFileInput )

function dropHandler(event){
    console.log("File dropped", event);
    event.preventDefault();
    // handleFiles(event.dataTransfer.files)
}

function dragOverHandler(event){
    console.log("file in dropzone")
    event.preventDefault();
}

async function handleFiles(fileList){
    const files = Array.from(fileList)

    const buffers = await Promise.all(files.map(file => file.arrayBuffer()));
    const bytes = buffers[0]
    console.log(bytes)

    const pdfDoc = await PDFLib.PDFDocument.load(bytes)
    const pages = pdfDoc.getPageCount()
    console.log(pages)

    //load pdf to pdf-lib
}

async function handleFileInput(event){

     const files = Array.from(event.target.files)

    const buffers = await Promise.all(files.map(file => file.arrayBuffer()));
    const bytes = buffers[0]

    const pdfDoc = await PDFLib.PDFDocument.load(bytes)
    const pages = pdfDoc.getPageCount()
    console.log(pages)
}