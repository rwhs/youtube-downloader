// Import
const fs = require('fs')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const ytdl = require('ytdl-core')

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

// Add video POST request
app.post('/test', (req, res) => {
    console.log(req.body.url);
    if (ytdl.validateURL(req.body.url)) { // Validate URL
        let dl = ytdl(req.body.url);
        // Download
        dl.pipe(fs.createWriteStream(dir + 'video.mp4'));
        // Download button not ready until finished
        dl.on('finish', () => {
            console.log('File download finished'); // Log when download finished
            res.send({
                downloadIsReady: 'true',
            });
        })
    } else {
        console.log('Invalid URL');
        res.send({
            downloadIsReady: '',
        });
    }
})

// Download video GET request
app.get('/download', (req, res) => {
    res.download('./videos/video.mp4', 'video.mp4', function (err) {
        console.log('Transfer complete');
        let deleteLocalVideo = () => {
            fs.unlink('./videos/video.mp4', function() {
                console.log('Deleted video')
            })
        };
        // Delete locally stored video after 10 minutes
        setTimeout(deleteLocalVideo, 600000);
    }
)})

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});
