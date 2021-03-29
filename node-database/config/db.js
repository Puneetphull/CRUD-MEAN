const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://myweb:myweb123@cluster0.aedpx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useUnifiedTopology:true},{urlNewParser:true}).then(()=>{
 console.log("database connected")
})
.catch((err)=>{
    console.log(err);

})
