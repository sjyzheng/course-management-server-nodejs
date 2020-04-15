const mongoose = require('mongoose')
const userSchema = require('./users.schema.server')
const userModel = mongoose.model('UsersModel', userSchema)
module.exports = userModel