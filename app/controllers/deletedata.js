const Data = require('../models/data');

exports.deletedata=(function(req,res){ 
    const result = Data.findOneAndDelete({_id: req.params._id})
            .then((data)=>{
                return res.json({status:"deleted data from database",message:data});
            }).catch((err)=> {
                console.log(err)
            return res.json({status:0,message:"Invalid request"});
        });
})