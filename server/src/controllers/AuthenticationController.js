const {User} = require('../models')

module.exports = {
    async register (req, res) {
        try {
        const user = await User.create(req.body)
        res.send(user.toJSON()) //send this user object to the client who request access to this endpoint
        } catch (err) {
            res.status(400).send({
                error: 'This Email is already in use.' //Email exsist
            })
        }
    }
}
