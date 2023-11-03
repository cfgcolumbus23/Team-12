const User = require('../models/user.js');

const registerUser = async (req, res) => {
    const {name, email, password, employeeID} = req.body;

    try {
        // Check if name exists
        if (!name) {
            return res.json({
                error: "Name is required"
            });
        }
        if (!employeeID) {
            return res.json({
                error: "Employee Id is required"
            });
        }
        const emailExists = await User.findOne({email});
        // Check if email exists
        if (emailExists) {
            return res.json({
                error: "Email is already registered"
            })
        }
        // Check if password is entered and length is good
        if (!password || password.length < 6) {
            return res.json({
                error: "Password is required and must be at least (6) characters long"
            })
        }
        const user = await User.create(req.body);
        return res.json(user);
    } catch (error) {
        console.log(error);
    }

}

const loginUser = async (req, res) => {
    const {employeeID, password} = req.body;
    // Check if employee id exists
    const user = await User.findOne({ employeeID });
    if (!user) {
        return res.json({
            error: "No user found"
        });
    }
}

module.exports = {
    registerUser,
}