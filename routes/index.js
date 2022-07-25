const { Router } = require('express')
const router = Router( )
const controllers = require( '../controllers/index' )
const Chart = require( '../models/chart.js' )


router.get(    '/charts',           controllers.getCharts   )
router.get(    '/charts/:id',       controllers.findChart   )
router.post(   '/create-chart/:id', controllers.createChart )
router.put(    '/update-chart/:id', controllers.updateChart )
router.delete( '/delete-chart/:id', controllers.deleteChart )


module.exports = router; 