// Modules
const fs = require('fs')
const express = require('express')
const ytdl = require('ytdl-core')
const inquirer = require('inquirer')

// Download Directory
const dir = 'videos/'

// Download Function
var download = async () => {
    inquirer.prompt(
    {type: 'input', name: 'url', message: 'Enter video URL, or type "exit" to close: '}
).then(answers => {
    // Exit
    if (answers.url.toLowerCase() == 'exit') { return } 
    else {
        ytdl(answers.url).pipe(fs.createWriteStream(dir + 'video.mp4'));
        return download()
    }
})
}

// Call function
download();