const Data = require("../models/data")


exports.searchdata=(async(req,res)=>{ 
    const resultdata = await Data.find({});
    console.log(resultdata);
    const filters = req.query;

    const filtereddata =  resultdata.filter(user =>{
      let isValid = true;
    for (key in filters) {

      console.log(key, Data[key], filters[key]);
     
      var regex = RegExp(filters[key],'i')
      isValid = isValid && regex.test(Data[key]);
    }

    return isValid;
    });
    //sending filtered data as response....
    res.send(filtereddata);
})