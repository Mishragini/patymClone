const express=require('express');
const router=express.Router();
const authMiddleware=require('../midleware');
const { Account } = require('../db');
const { default: mongoose } = require('mongoose');

router.get('/balance',authMiddleware,async(req,res)=>{
const account=await Account.findOne({
    userId:req.userId
})
    res.json({balance: account.balance});
})

router.post('/transfer',authMiddleware,async(req,res)=>{
    const session=await mongoose.startSession();
    session.startTransaction();

    const senderAccount = await Account.findOne({ userId: req.userId }).session(session);

    if (!senderAccount || senderAccount.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const{to,amount}=req.body;

    const recipientAccount= await Account.findOne({userId:to}).session(session);
    if(!recipientAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });

    }

    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    await session.commitTransaction();

    res.json({
        message: "Transfer successful"
    });
})

module.exports=router;