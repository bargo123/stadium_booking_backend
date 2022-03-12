const mongoose = require("mongoose");
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "fill the name Field"]
    },
    email: {
        unique: true,
        type: String,
        required: [true, "fill the email Field"]
    },
    password: {
        type: String,
        required: [true, "fill the password Field"]
    }
});

UserSchema.pre("save", async function() {
    const salt = await bycrypt.genSalt(10);
    this.password = await bycrypt.hash(this.password, salt);


});

UserSchema.methods.genToken = function() {
    const token = jwt.sign({ name: this.name, id: this._id }, process.env.JWT_SECRET, {
        expiresIn: "30h",
    });
    return token;
};

UserSchema.methods.passwordMatch = async function(currentPassword) {
    const password = this.password;
    return await bycrypt.compare(currentPassword, password);
};

module.exports = mongoose.model("UserSchema", UserSchema);