function simpleRouting(url) {
    switch (url) {
        case '/':
            return '<h1>Index Page</h1>'
        case '/product':
            return '<h1>Product Page</h1>'
        default:
            return '<h1>Error 404 Page</h1>'
    }
}


module.exports = {simpleRouting}
