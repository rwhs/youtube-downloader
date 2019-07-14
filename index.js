// Modules
const fs = require('fs')
const ytdl = require('ytdl-core')

// Download Directory
const dir = 'videos/'

ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ').pipe(fs.createWriteStream(dir + 'video.mp4'));