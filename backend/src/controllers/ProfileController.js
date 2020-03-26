const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const ngo_id = request.headers.authorization

        const result = await connection('incidents')
            .where('ngo_id', ngo_id)
            .count()
        const count = result[0]['count(*)']

        const incidents = await connection('incidents')
            .where('ngo_id', ngo_id)
            .select('*')
        
        response.header('X-Total-Count', count)
        return response.json(incidents)
    }
}