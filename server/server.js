// Import
const fs = require('fs')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const ytdl = require('ytdl-core')
const mime = require('mime');


// Download Directory
const dir = 'videos/'
const PORT = 4000;


// Middleware
app.use(cors());
app.use(bodyParser.json());


// Main
app.get('/', (req, res) => {
    res.send('Home page');
});


// Download request
app.post('/test', (req, res) => {
    console.log(req.body.url);
    if (ytdl.validateURL(req.body.url)) { // Validate URL
        let dl = ytdl(req.body.url);

        // Download
        dl.pipe(fs.createWriteStream(dir + 'video.mp4'));
        // Download button not ready until finished
        // res.send({
        //     downloadIsReady: ''
        // });
        dl.on('finish', () => {
            console.log('File download finished'); // Log when download finished

            res.send({
                downloadIsReady: 'true',
            });
            // res.end()
            // let file = dir + 'video.mp4';
            // let filetype = mime.getType(file);

            // res.setHeader('Content-type', filetype);
            // res.setHeader('Content-disposition', 'attachment; filename=download.mp4');
            // res.download('./videos/video.mp4');
            // fs.createReadStream('./videos/video.mp4').pipe(res);
        })
    } else {
        console.log('Invalid URL');
    }
})

app.get('/download', (req, res) => {
    res.download('./videos/video.mp4');
})

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});
