const express = require("express");
const router = express.Router();

const User = require('../models/User.model')



router.post("/register", async(req, res)=>{
    try {
        const userEmail = req.body.email
        const userPassword = req.body.password
        const userName = req.body.userName


        const newUser = await User.create({
            name: userName,
            password: userPassword,
            email: userEmail
        })

        res.status(200).json({
            message: "user created successfully",
            ...newUser
        })
    } catch (error) {
        
    }
})



router.post("/login", async(req, res)=>{

    const userEmail = req.body.email
    const userPassword = req.body.password


    try {
        const userFound = await User.findOne({
            email: userEmail
        })

        

        if(userFound){
            if(userPassword == userFound.password){
                res.status(200).json({
                    message: "login successful",
                    ...userFound._doc
                })
            }else{
                res.status(400).json({
                    message : "incorrect password"
                })
            }
        }else{
            res.status(400).json({
                message : "user not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            message : "internal error"
        })
    }
})


// TODO: new transaction added

router.put('/transaction', async(req,res)=>{

    const userEmail = req.body.email
    const newTransaction = req.body.transaction

    try {
        await User.findOneAndUpdate({
            email: userEmail
        },{
            $push:{
                transactions: newTransaction
            }
        })

        res.status(200).json({
            message: "new transaction added"
        })

    } catch (error) {

        res.status(500).json({
            message : "internal error"
        })
        
    }

})

router.get('/user', async(req,res)=>{
    const email = req.body.email

    try {
        const user = await User.findOne({
            email: email
        })

        res.status(200).json({
            ...user._doc
        })
    } catch (error) {
        res.status(500).json({
            message : "internal error"
        })
    }
})





module.exports = router;