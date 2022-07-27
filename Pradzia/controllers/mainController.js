const { addUser, allUsers, checkSize} = require('../modules/users')


module.exports = {
    
    sendInfo: (req,res) => {
        console.log(req.body)
        res.send({message:"ok"})
    },
    createPost: (req,res) => {

        res.send({error: false, message: "Post created"})
    },
    addUser: (req,res) => {
        if (checkSize()) return res.send({error: true, message:"Reached maximum number of 10 users"})
        addUser(req.body)
        return res.send({error: false, message:"User added", users: allUsers()})
    }

}