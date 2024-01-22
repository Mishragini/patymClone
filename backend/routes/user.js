const express = require("express");
const z=require('zod');
const {JWT_SECRET}=require("../config");
const { authMiddleware } = require("../midleware");
const { Account } = require("../db");

const router=express.Router();

const signupSchema=z.object({
    username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string()
})

const updateSchema = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.post("/signup",async (req,res)=>{
const response=signupSchema.safeParse(req.body);
if(!response.success){
    return res.status(411).json({
        message: "Email already taken / Incorrect inputs"
    })
}
const existingUser = await User.findOne({
    username: req.body.username
})

if (existingUser) {
    return res.status(411).json({
        message: "Email already taken/Incorrect inputs"
    })
}


const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
})
const userId = user._id;


const account=await Account.create({
userId:userId,
balance:10000*Math.random()
})

const token = jwt.sign({
    userId
}, JWT_SECRET);

res.json({
    message: "User created successfully",
    token: token
})

})

router.post("/signup",async(req,res)=>{
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })
    if(existingUser){
        const token=jwt.sign({
            userId
        }, JWT_SECRET);
        res.json({
            message: "User signedIn successfully",
            token: token
        })
        return;
    }
    
        res.status(411).json({
            message: "Error while logging in"
        })
    
})

router.put('/user',authMiddleware, async(req,res)=>{
const  {success}=updateSchema.safeParse(req.body);
if (!success) {
    res.status(411).json({
        message: "Error while updating information"
    })
}
await User.updateOne(req.body,{
    id:req.userId
})
res.json({
    message: "Updated successfully"
})
})

router.get("/bulk",authMiddleware,async(req,res)=>{
    const filter =req.query.filter||"";
    const users= await User.find({
        $or:[{
            firstName:{
                "$regex":filter
            }
        },{
            lastName:{
                "$regex":filter
            }
         }]   
    })
    res.json({
        user:users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))
    })
})

module.exports=router;