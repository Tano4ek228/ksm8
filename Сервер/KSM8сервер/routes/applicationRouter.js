const Router = require('express')
const router = new Router
const applicationController = require('../controllers/applicationController')

router.post('/', applicationController.create)
module.exports = router