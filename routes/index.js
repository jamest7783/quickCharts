const { Router } = require('express')
const router = Router( )
const { chartController } = require( '../controllers' )
const Chart = require( '../models/chart.js' )


router.get(    '/charts',           chartController.getCharts   )
router.get(    '/charts/:id',       chartController.viewChart   )
router.post(   '/create-chart',     chartController.createChart )
router.put(    '/update-chart/:id', chartController.updateChart )
router.delete( '/delete-chart/:id', chartController.deleteChart )
router.get(    '/find',             chartController.findChart   )


module.exports = router; 