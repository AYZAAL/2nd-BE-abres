const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validatetoken = expressAsyncHandler(async (req, res, next) => {
   const authheader  = req.headers.Authorization || req.headers.authorization;
   const token = authheader.split(" ")[1]

   if(token){
    jwt.verify(token,"abres",(err,decode)=>{
        if(err){
            res.status(404)
            throw new Error("something went wrong ")
        }
        else{
            console.log(decode)
            req.user=decode.user
            next()
        }
    })
   }
   console.log(token)

});

module.exports = validatetoken;
