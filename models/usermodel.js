const mongooose = require("mongoose");
const userSchema=new mongooose.Schema({
  username:{
    type:String,
    required:[true,"enter all the infromation "]
  },
  email:{
    type:String,
    required:[true,"enter all the infromation " ],
    unique:[true,"enter your email stupid "]
  },
  password:{
    type:String,
    required:[true,"enter all the infromation " ]
  }
},{timestamps:true})

module.exports = mongooose.model("User",userSchema)