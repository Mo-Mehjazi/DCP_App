const Joi = require('@hapi/joi')

//express middleware
module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$') //Password check
            )
        }

        const {error, value} = Joi.validate(req.body, schema)
        //usage to validate Email and Password mit Joi
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You need to provide a vaild email'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `Password didn't match the following rules:
                        <br>
                        ONLY: lower case, upper case, numerics
                        <br>
                        At least 8 characters in length and not greater than 32`
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registeration'
                    })
            }
        } else {
            next()
        }
    }
}