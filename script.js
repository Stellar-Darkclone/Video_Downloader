const downloadForm = document.getElementById('download-form');
const urlInput = document.getElementById('url');
const downloadBtn = document.getElementById('download-btn');
const formatSelect = document.getElementById('format');
downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const url = urlInput.value;
    const format = formatSelect.value;
    fetch('/download', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url, format })
    })
    .then((res) => res.blob())
    .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `video.${format}`;
        link.click();
    })
    .catch((err) => console.error(err));
});
