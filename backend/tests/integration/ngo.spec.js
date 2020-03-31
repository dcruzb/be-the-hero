const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('NGOs', () => {
    beforeEach(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () => {
        await connection.destroy()
    })

    it('should be able to create a new NGO', async () => {
        const response = await request(app).post('/ngos').send({
            "name": "DCB",
            "phone": "81999990000",
            "email": "contato@dcb.com.br",
            "whatsapp": "81997573040",
            "city": "Recife",
            "state": "PE"            
        })

        console.log('response.body: ', response.body)

        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})