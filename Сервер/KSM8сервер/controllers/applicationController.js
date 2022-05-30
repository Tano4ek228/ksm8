const { Application } = require('../models/models')
class applicationController {
    async create(req, res) {
        const { name,number } = req.body
        const type = await Application.create({ name,number })
        return res.json(type)
    }
}
module.exports = new applicationController()