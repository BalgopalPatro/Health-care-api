const Data = require('../models/data');

exports.updatedata=(function(req,res){ 
    const result = Data.findOneAndUpdate({_id: req.params._id}, {$set: req.body})
            .then((data)=>{
                return res.json({status:1,message:data});
            }).catch((err)=> {
                console.log(err)
            return res.json({status:0,message:"Invalid request"});
        });
})

