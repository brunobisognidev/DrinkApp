const {  Router } = require('express')
const DrinkerController = require('./controllers/drinker')
const SearchController = require ('./controllers/search')

const Router ()

routes.get('/bebedor', DrinkerController.index)
routes.post('/bebedor', DrinkerController.store)

routes.get('/busca', SearchController.index)

module.exports = routes 