const users = []


module.exports = {
    checkUser: ({photo, name, gender}) => {
        let result = users.find(x => x.name.toLowerCase() === name.toLowerCase())
        if (result) {return true}
        else {return false}
    },
    addUser: (user) => {
        users.push(user)
        console.log(users)
    },
    allUsers: () => {
        return users
    },
    checkSize: () => {
        if (users.length === 10) return true
        return false
    }

}