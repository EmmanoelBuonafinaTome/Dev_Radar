const { Router} = require('express')
const axios = require('axios')
const Dev = require('./models/Dev')

const routes = Router();

// Metodos HTTP: GET, POST, PUT, DELETE

//Tipos de parametros:

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body:

// MongoDB (Não-relacional)

routes.post('/devs', async (request, response) => {
    const { github_username, techs } = request.body

    const apiResponse = await axios.get(`https//api.github.com/users/${github_username}`)

    console.log(apiResponse.data)

    return response.json({message: 'Hello Emmanoel'})
    
})

module.exports = routes