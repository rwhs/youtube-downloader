// Modules
const fs = require('fs')
const ytdl = require('ytdl-core')
const inquirer = require('inquirer')

// Download Directory
const dir = 'videos/'

const download = async () => {
    inquirer.prompt(
    {type: 'input', name: 'url', message: 'Enter video URL, or type "exit" to close: '}
).then(answers => {
    if (answers.url.toLowerCase() == 'exit') {return} else {
    ytdl(answers.url).pipe(fs.createWriteStream(dir + 'video.mp4'));
    return download()
    }
})
}

download();