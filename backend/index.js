const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        app: 'Be the Hero!',
        author: 'dcb@cin.ufpe.br'
    })

})

app.listen(3333);