const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('aboutus',{title:"APP",message:"ABOUT US PAGE"});
})

module.exports = router;