const { Material } = require('../models/models')
const ApiError = require('../error/ApiError');
const uuid = require('uuid')
const path = require('path');
const { nextTick } = require('process');

class materialController {
    async create(req, res, next) {
        try {
            const { name, price, typeId, info } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const material = await Material.create({ name, price, typeId, img: fileName })

            return res.json(material)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
        const { typeId } = req.query
        let materials;
        if (!typeId) {

        }
    }
    async getOne(req, res, id) {

    }
}
module.exports = new materialController()