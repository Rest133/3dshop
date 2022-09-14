const fs = require('fs'),
    path = require('path')

function sendPageFile(res, pageName) {
    const filePath = path.join('./', 'pages', `${pageName}.html`)
    fs.readFile(filePath, (err, data) => {
        if (err) console.error(err)
        else res.write(data)
        res.end()
    })
}

module.exports = {
    sendPageFile
}
