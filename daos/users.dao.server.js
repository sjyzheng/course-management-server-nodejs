const userModel = require('../models/user.model.server')

const findAllUsers = () => userModel.find()

const createUser = (user) => userModel.create(user);
const deleteUser = (user) => {}

module.exports = {
    findAllUsers,
    createUser,
    deleteUser
}