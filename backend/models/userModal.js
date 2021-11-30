const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")


const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        
        email:{
            type:String,
            required:true,
            unique:true,
        },
        
        password: {
            type:String,
            required:true,
        },

        isAdmin:{
            // just in case we need
            type:Boolean,
            required:true,
            default:false,
        },
        pic: {
            type:String,
            required:true,
            default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhvWpQrh3nIxmjLBQSyH5uu7OKpprR2b4-g&usqp=CAU"
        },

    },
    {
        timestamps:true,
    }
);




const User = mongoose.model("User",userSchema);

module.exports=User;