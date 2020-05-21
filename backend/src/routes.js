const { Router } = require('express')
const DevController = require('./controllers/DevControllers')
const SearchControlle = require('./controllers/SearchController')
const routes = Router();

// Metodos HTTP: GET, POST, PUT, DELETE

//Tipos de parametros:

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body:

// MongoDB (Não-relacional)

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
routes.get('/search', SearchControlle.index)

module.exports = routes
