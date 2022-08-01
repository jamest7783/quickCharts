const { Router } = require('express')
const router = Router( )
const { chartController } = require( '../controllers' )
const { userController } = require( '../controllers' )
const Chart = require( '../models/chart.js' )
const User = require('../models/user.js')


router.get(    '/charts',           chartController.getCharts   )
router.get(    '/charts/:id',       chartController.getNewChart   )
router.post(   '/create-chart',     chartController.createChart )
router.put(    '/update-chart/:id', chartController.updateChart )
router.delete( '/delete-chart/:id', chartController.deleteChart )
router.get(    '/find',             chartController.findChart   )


router.get('/community',userController.getUsers )

router.post('/new-account',userController.createAccount)


module.exports = router; 


