const Router = require("express")
const router = new Router()
const brandController = require("../controllers/brandController")

// создать бренд
router.post('/', brandController.create)
// получить бренд
router.get('/', brandController.getAll)

module.exports = router
