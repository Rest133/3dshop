const {sendPageFile} = require('./utils')

function simpleRouting(req, res) {
    switch (req.url) {
        case '/':
            return sendPageFile(res, 'index')
        case '/product':
            return sendPageFile(res, 'product')
        default:
            return sendPageFile(res, '404')
    }
}


module.exports = {simpleRouting}
