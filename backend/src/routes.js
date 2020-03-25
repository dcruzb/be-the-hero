const express = require('express')
const routes = express.Router()

const SessionController = require('./controllers/SessionController')
const NgoController = require('./controllers/NgoController')
const ProfileController = require('./controllers/ProfileController')
const IncidentController = require('./controllers/IncidentController')

routes.get('/', (request, response) => {
    return response.json({
        app: 'Be the Hero!!!',
        author: 'dcb@cin.ufpe.br'
    })
})

routes.post('/sessions', SessionController.create)

routes.get('/ngos', NgoController.index)
routes.post('/ngos', NgoController.create)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes