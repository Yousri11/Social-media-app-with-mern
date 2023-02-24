const user = require('../models/user.models.js');

exports.signup = (req,res)=>{
    const data = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        pass : req.body.pass,
        bio : req.body.bio,
        picture : req.body.picture,
        birth : req.body.birth
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