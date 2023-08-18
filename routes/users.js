const express = require('express');
const router = express.Router();

const users = [
    {id:1, name:'A'},
    {id:2, name:'B'}
]

router.get('/', (req,res) => {
   res.status(200).send(users)
})
router.get('/:id', (req,res) => {
    const user = users.find(u => u.id === parseInt(req.params.id))
    if(!user) res.status(404).send('No USER FOUND')
    user && res.status(200).send(user)
})

router.post('/', (req,res) => {
    const params = {id:users.length+1, name:req.body.name}
    const {error} = ValidityState(req.body)
    console.log(error);
    if(error) return res.status(400).send(error.message)
    users.push(params)
    return res.status(200).send(users)
})

router.put('/:id', (req,res) => {
    const user = users.find(u => u.id === parseInt(req.params.id))
    if(!user) return res.status(404).send('USER NOT FOUND')
    
    const {error} = ValidityState(req.body)
    console.log(error);
    if(error) return res.status(400).send(error.message)

    user.name = req.body.name;
    return res.status(200).send(users)
})

router.delete('/:id', (req,res) => {
    const user = users.find(u => u.id === parseInt(req.params.id))
    if(!user) return res.status(404).send('USER NOT FOUND')
    const index = users.indexOf(user)
    users.splice(index,1)
    return res.status(200).send(users)
})

function ValidityState(user){
    const schema = Joi.object({
        name : Joi.string().min(3).required()
    })
    const res = schema.validate(user)
    return res;    
}

module.exports = router;