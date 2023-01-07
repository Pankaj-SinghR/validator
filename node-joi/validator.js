const Joi = require("joi");

const schema = Joi.object({
    customer_id:Joi.number().min(1).max(1000).required(),
    assets:Joi.object().required(),
})

async function validateBody (req, res, next){
    const body = req.body;
    try {
        const value = await schema.validateAsync(body);
        next()
    } catch (e) {
        console.log(e.message);
        res.status(400).send({
            "message": e.message
        })
    }
    
} 

module.exports = validateBody
