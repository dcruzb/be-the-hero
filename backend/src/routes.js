const express = require('express')
const routes = express.Router()
const crypto = require('crypto')
const connection = require('./database/connection')

routes.get('/', (request, response) => {
    return response.json({
        app: 'Be the Hero!!!',
        author: 'dcb@cin.ufpe.br'
    })
})

routes.post('/ngos', async (request, response) => {
    const { name, email, phone, whatsapp, city, state} = request.body
    console.log({ name, email, phone, whatsapp, city, state})

    const id = crypto.randomBytes(4).toString('HEX')

    await connection('ngos').insert({ id, name, email, phone, whatsapp, city, state})

    return response.json({ id })
})

routes.get('/ngos', async (request, response) => {
    const ngos = await connection('ngos').select('*')

    return response.json(ngos)
})

module.exports = routes