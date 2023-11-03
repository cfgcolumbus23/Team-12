const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        maxLength: 32,
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        maxLength: 32,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        maxLength: 32,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Length must be at least 6 characters"]
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