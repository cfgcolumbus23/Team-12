const User = require('../models/user.js');

const registerUser = async (req, res, next) => {
    const {email} = req.body;
    const emailExists = await User.findOne({email});
    if (emailExists) {
        return res.json({
            error: "Email is already registered"
        })
    }
    try {
        const user = User.create(req.body);
        return res.json(user);
    } catch {
        console.log(error);
    }

}

module.exports = {
    registerUser,
}