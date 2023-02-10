const user = require('../models/user.models.js');

exports.signup = (req,res)=>{
    console.log(req.body)
    const data = {
        firstname : 'yousri',
        lastname : 'meftah',
        email : 'yousri@gmail.com',
        pass : '123456789',
        bio : 'am the best dev ',
        picture : 'yousri.png',
        birth : new Date()
    }
    const u1=new user(data);
    u1.save().then(
        (CreatedUser)=>{
        res.status(200).json({message : "maalem yel mef"})
    }
    ).catch(
        (err)=>{
        res.status(400).json({message : "rakaz"});
    }
    )
}