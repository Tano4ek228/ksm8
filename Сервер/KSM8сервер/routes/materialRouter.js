const Router = require('express')
const router = new Router
const materialController = require('../controllers/materialController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', materialController.create)
router.get('/', materialController.getAll)
router.get('/:id', materialController.getAll)


module.exports = router