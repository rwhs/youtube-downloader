// Import
const fs = require('fs')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const inquirer = require('inquirer')
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

// app.get('/test', (req, res) => {
//     res.send('Testing video download');
//     inquirer.prompt(
//         {type: 'input', name: 'url', message: 'Enter video URL, or type "exit" to close: '}
//     ).then(answers => {
//         // Exit
//         if (answers.url.toLowerCase() == 'exit') { return } 
//         else {
//             ytdl(answers.url).pipe(fs.createWriteStream(dir + 'video.mp4'));        }
//     })    
// })

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});
