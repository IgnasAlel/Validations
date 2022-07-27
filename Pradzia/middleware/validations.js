const {checkUser, addUser} = require('../modules/users')

function checkGender(gender) {
    if (gender.toLowerCase() === "female" ) return true
    if (gender.toLowerCase() === "male" ) return true

    return false
}

module.exports = {
    validatePost: (req,res, next) => {
        console.log(req.body)
        let valid = false
        let {photo, username, title, location, age} = req.body
        let result = photo.includes("http")
        if (!result) return res.send({error: true, message:"Bad photo url"})
        if (title.length < 10) return res.send({error: true, message:"Title is too short"})
        if (title.length > 100) return res.send({error: true, message:"Title is too long"})
        if (username.length < 3) return res.send({error: true, message:"Username is too short"})
        if (username.length > 30) return res.send({error: true, message:"Username is too long"})
        if (username[0] === username[0].toLowerCase()) return res.send({error: true, message : "Username has to start with upper case letter"})
        if (locations.find(x => {x === location.toLowerCase()})) return res.send({error: true, message:"Location is incorrect"})
        if (age > 50) return res.send({error: true, message:"You are too old, relax old man"})
    
        next()
    
    },
    validateUser: (req,res,next)=>{
        const {photo, name, gender} = req.body
        if (!photo) return res.send({error:true, message: "Enter your photo URL"})
        if (!name) return res.send({error:true, message: "Enter your username"})
        if (!gender) return res.send({error:true, message: "Enter your gender"})
        if (name.length > 30) return res.send({error:true, message: "Name is too long, max 30 characters"})
        if (name.toLowerCase() === "john") return res.send({error:true, message:"John is not allowed here"})
        if (checkUser(req.body)) return res.send({error: true, message:"This name is already taken"})
        if (!checkGender(gender)) return res.send({error: true, message:"Gender can only be Male of Female"})
        next()
    }


}