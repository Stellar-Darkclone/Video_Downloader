const express = require('express');
const ytdl = require('ytdl-core');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static(__dirname));
app.post('/download', (req, res) => {
    const { url, format } = req.body;
    if (format === 'mp4') {
        res.header('Content-Disposition', `attachment; filename="video.mp4"`);
        ytdl(url, { filter: 'videoandaudio' })
            .pipe(res);
    } else if (format === 'mp3') {
        res.header('Content-Disposition', `attachment; filename="audio.mp3"`);
        ytdl(url, { filter: 'audioonly' })
            .pipe(res);
    }
});
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
