const ex=require('express')
const uc=require('../controlls/user.controller')
const rt=ex.Router();

rt.post('/signup',uc.signup)
module.exports=rt;