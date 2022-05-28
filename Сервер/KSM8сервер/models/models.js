const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
})
const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})
const BasketMaterial = sequelize.define('basket_material', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})
const Material = sequelize.define('material', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: true },
    price: { type: DataTypes.INTEGER, allowNull: true },
    qant: { type: DataTypes.INTEGER}
})
const Type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: true},
})
User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketMaterial)
BasketMaterial.belongsTo(Basket)

Material.hasMany(BasketMaterial)
BasketMaterial.belongsTo(Material)

Type.hasMany(Material)
Material.belongsTo(Type)


module.exports = {
    User,
    Basket,
    BasketMaterial,
    Material,
    Type
}