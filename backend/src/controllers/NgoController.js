const connection = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {
    async create(request, response) {
        const { name, email, phone, whatsapp, city, state} = request.body

        const id = generateUniqueId()

        await connection('ngos').insert({ id, name, email, phone, whatsapp, city, state})

        return response.json({ id })
    },

    async index(request, response) {
        const ngos = await connection('ngos').select('*')

        return response.json(ngos)
    }
}