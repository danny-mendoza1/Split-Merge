const button = document.querySelector("#toggle");
const dropZone = document.querySelector("#drop-zone");
const inputFile = document.querySelector("#input-file");

dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
});

dropZone.addEventListener("drop", async (e) => {
    e.preventDefault()
    const files = [...e.dataTransfer.files]
    await handleFiles(files)
})

inputFile.addEventListener("change", async(e) => {
    const files = [...e.currentTarget.files];
    await handleFiles(files)
})


async function handleFiles(files){
    const buffers = await Promise.all(files.map(file => file.arrayBuffer()));
    const bytes = buffers[0]
    const pdfDoc = await PDFLib.PDFDocument.load(bytes)
    const pages = pdfDoc.getPageCount()
    console.log(pages)
}