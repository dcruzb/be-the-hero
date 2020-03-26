const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { id } = request.body

        if (!id) {
            console.log('SessionController.create() - No ID provided.');
            return response.status(400).json({ error: 'No ID provided.'})
        }

        const ngo = await connection('ngos')
            .where('id', id)
            .select('name')
            .first()
        
        if (!ngo) {
            return response.status(200).json({ error: 'No NGO found with this ID.'})
        }

        return response.json(ngo)
    }
}