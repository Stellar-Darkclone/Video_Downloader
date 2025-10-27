const downloadForm = document.getElementById('download-form');
const urlInput = document.getElementById('url');
const downloadBtn = document.getElementById('download-btn');
const formatSelect = document.getElementById('format');
downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const url = urlInput.value;
    const format = formatSelect.value;
    // Add logic here to handle download
    console.log(`Downloading ${url} in ${format} format...`);
});
