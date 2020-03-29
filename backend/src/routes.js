const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const SessionController = require('./controllers/SessionController')
const NgoController = require('./controllers/NgoController')
const ProfileController = require('./controllers/ProfileController')
const IncidentController = require('./controllers/IncidentController')

const routes = express.Router()

routes.get('/', (request, response) => {
    return response.json({
        app: 'Be the Hero!!!',
        author: 'dcb@cin.ufpe.br'
    })
})


routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
    })
}), SessionController.create)


routes.get('/ngos', NgoController.index)

routes.post('/ngos', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        phone: Joi.string().required().min(10).max(11),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        state: Joi.string().required().length(2)
    })
}), NgoController.create)


routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index)


routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number().integer()
    })
}), IncidentController.index)

routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().min(0).required()
    })
}), IncidentController.create)

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().integer().required()
    })
}), IncidentController.delete)

module.exports = routes