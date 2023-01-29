const bcrypt = require('bcrypt');
const { User } = require('../../../models');
const Validator = require('fastest-validator');
const valid = new Validator();

module.exports = async (req, res) => {
    const schema = {
        name: 'string|empty:false',
        email: 'email|empty:false',
        password: 'string|min:6',
        profesi: 'string|optional'
    }

    const validate = valid.validate(req.body, schema);

    // if validate have an array it's mean error
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    // find email exists
    const user = await User.findOne({
        where: { email: req.body.email }
    });

    if (user) {
        return res.status(409).json({
            status: 'error',
            message: 'email already exists'
        })
    }

    const password = await bcrypt.hash(req.body.password, 10);

    const data = {
        password,
        name: req.body.name,
        email: req.body.email,
        profesi: req.body.profesi,
        role: 'student',
    }

    const createUser = await User.create(data);

    return res.json({
        status: 'success',
        data: {
            id: createUser.id
        }
    });
}