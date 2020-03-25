const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query

        const result = await connection('incidents').count()
        const count = result[0]['count(*)']

        const incidents = await connection('incidents')
            .limit(5)
            .offset((page - 1) * 5)
            .select('*')

        response.header('X-Total-Count', count)
        return response.json(incidents)
    },

    async create(request, response) {
        const { title, description, value } = request.body
        const ngo_id = request.headers.authorization;

        const result = await connection('incidents').insert({ title, description, value, ngo_id })

        const id = result[0]

        return response.json({ id })
    },

    async delete(request, response) {
        const { id } = request.params
        const ngo_id = request.headers.authorization

        const incident = await connection('incidents')
            .where('id', id)
            .select('ngo_id')
            .first()

        if (incident.ngo_id != ngo_id) {
            return response.status(401).json({ error: 'Operation not permitted.'})
        }

        await connection('incidents')
            .where('id', id)
            .delete()

        return response.status(204).send()
    }
}