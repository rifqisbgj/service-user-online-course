const bcrypt = require('bcrypt');
const { User } = require('../../../models');
const Validator = require('fastest-validator');
const valid = new Validator();

module.exports = async (req, res) => {
    const schema = {
        email: 'email|empty:false',
        password: 'string|min:6'
    }

    const validate = valid.validate(req.body, schema);

    if (validate.length) {
        return res.status(409).json({
            status: 'error',
            message: validate
        });
    }

    const user = await User.findOne({
        where: {email: req.body.email}
    });

    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: 'user not found'
        });
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(404).json({
            status: 'error',
            message: 'user not found'
        });
    }

    res.json({
        status: 'success',
        data: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
            profesi: user.profesi
        }
    })
}