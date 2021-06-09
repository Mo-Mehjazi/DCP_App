const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

fs//read files in dir and give an array with the files but not index.js
    .readdirSync(__dirname)
    .filter((file) =>
    file !== 'index.js'
    )
.forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)//include the files that fs found
    db[model.name] = model
})

//Access to all sequelize Objects
db.Sequelize = Sequelize
db.sequelize = sequelize
module.exports = db