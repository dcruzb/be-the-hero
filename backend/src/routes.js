const express = require('express')
const routes = express.Router()


routes.get('/', (request, response) => {
    return response.json({
        app: 'Be the Hero!!!',
        author: 'dcb@cin.ufpe.br'
    })
})

routes.post('/users', (request, response) => {
    const body = request.body

    console.log(body)

    return response.json({
        app: 'Be the Hero!',
        author: 'dcb@cin.ufpe.br'
    })
})

module.exports = routes