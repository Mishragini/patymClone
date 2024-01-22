const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    username:String,
    password:String
})

const accountSchema=mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:"true"},
    balance:{type:Number,required:true}
})

const User=mongoose.model('User',userSchema);

const Account=mongoose.model('Account',accountSchema);

module.exports={
    User,
    Account
}

mongoose.connect("mongodb+srv://mishragini8:D0rOeY84Tga4g0Tc@cluster0.szr5vbq.mongodb.net/")