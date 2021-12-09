const Data = require("../models/data")


exports.searchdata=(async(req,res)=>{ 
    const resultdata = await Data.find({});
    console.log(resultdata);
    const filters = req.query;

    const filtereddata =  resultdata.filter(data =>{
      let isValid = true;
    for (key in filters) {

      console.log(key, data[key], filters[key]);
     
      var regex = RegExp(filters[key],'i')
      isValid = isValid && regex.test(data[key]);
    }

    return isValid;
    });
    //sending filtered data as response....
    res.send(filtereddata);
})