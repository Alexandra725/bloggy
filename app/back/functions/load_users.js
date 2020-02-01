const express = require('express')
const bcryptjs = require('bcryptjs');
const router = express.Router();


const checkUsers = router.get('/', async(req, res) => {
    const users = await req.app.locals.dbo.collection('users').find({}, (err, users)=> {
        console.log('users', user)
    });
    const defaultUser = 
        {
            name: "Admin",
            lastName: "Admin",
            nickName: "Admin",
            email: "admin@admin.com",
            pass: bcryptjs.hashSync("1234"),
            role: "ADMIN"
        }
    if(users.length === 0) {
        app.locals.dbo.collection('users').insert(defaultUsers, (err, user) => {
            if (err) {
               res.send(err)
            }
            console.log("admin inserted:", defaultUser);
        })
    } else {
        console.log('error insert a user')
    }
})

module.exports = router;