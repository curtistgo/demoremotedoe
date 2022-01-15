const copyDate = new Date().getFullYear();
document.querySelector("#the-date").innerHTML = "Copyright " + copyDate;

// Generate the video and PDF resources

const resource = `
    <p>Video Lesson: <a href="https://www.youtube.com/watch?v=ffbE3Ucrt5g" target="_blank">The Transcontinental Railroad</a></p>
    <p>PDF: <a  href="./history_document.pdf" target="_blank">assignment/homework</a></p>
`;

document.querySelector("#lesson_1").addEventListener("click", generateResources);
function generateResources (event) {
    event.preventDefault();
    document.querySelector("#resources").innerHTML = resource;
}