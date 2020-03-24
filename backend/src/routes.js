const express = require('express')
const routes = express.Router()
const ongController = require('./controllers/ongController.js')
const incidentController = require('./controllers/incidentController.js')
const profileController = require('./controllers/profileController.js')
const sessionController = require('./controllers/sessionController.js')

// create a new ONG
routes.post('/ongs', ongController.create)
// read all ONGs
routes.get('/ongs', ongController.index)


// create incident
routes.post('/incidents', incidentController.create)
// list all incidents
routes.get('/incidents', incidentController.index)
// delete incident
routes.delete('/incidents/:id', incidentController.delete)
// list all incidents of a specific ong
routes.get('/profile', profileController.index)


// create a session
routes.post('/sessions', sessionController.create)

module.exports = routes