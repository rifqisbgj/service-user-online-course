const register = require('./register');
const login = require('./login');
const update = require('./editprofile');
const getuser = require('./getUser');
const getListUser = require('./getListUser');
const logout = require('./logout');

module.exports = {
    register,
    login,
    update,
    getuser,
    getListUser,
    logout
}