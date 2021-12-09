const Data = require("../models/data")


exports.readdata=(async(req,res)=>{ 
    await Data.find({mod_id: req.params.mod_id}).then((data)=>{return res.json(data)})
})