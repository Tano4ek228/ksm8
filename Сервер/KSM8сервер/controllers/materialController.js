const { Material, MaterialInfo } = require('../models/models')
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
            if (info) {
                info = JSON.parse(info)
                info.array.forEach(i => {
                    MaterialInfo.create({
                        title: i.title,
                        description: i.description,
                        materialId: material.id
                    })
                });
            }


            return res.json(material)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
        const { typeId } = req.query
        console.log(req.query)
        let materials;
        if (!typeId) {
            materials = await Material.findAll()
        } else
            materials = await Material.findAll({ where: { typeId } })
        return res.json(materials)
    }
    async getOne(req, res) {
        const { id } = req.params
        const material = await Material.findOne({
            where: { id },
            include: [{ model: MaterialInfo, as: 'info' }]
        })
        return res.json(material)
    }
}
module.exports = new materialController()