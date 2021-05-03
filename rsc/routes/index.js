const { Router } = require('express');
const router = Router();

router.get('/iecho', (req,res) => {
    var p1 = req.query.text;
    const data = { 
        "text": "tset"
    };
    const err = {
        "error": "no text"
    };
    if(p1 == "test")
    {
       return res.status(200).json(data);
    }
    else
    {
        return res.status(400).json(err);
    }
   });

module.exports = router;