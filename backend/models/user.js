const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxLength: 32,
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 32,
    },
    email: {
        type: String,
        required: true,
        maxLength: 32,
        unique: true,
    },
    employeeID: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: Number,
        required: false,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    role: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

// Encrypt password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("User", userSchema);