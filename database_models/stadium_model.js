const mongoose = require("mongoose");



const StadiumSchema = mongoose.Schema({
    stadName: {
        type: String,
        required: [true, "you should spicfy stad name"],
    },
    price: {
        type: String,
        required: [true, "you should spicfy stad price per hour"],
    },
    fromTime: {
        type: Date,
        required: [true, "you should spicfy stad fromTime per hour"],

    },
    ToTime: {
        type: Date,
        required: [true, "you should spicfy stad fromTime per hour"],
    },
    images: {
        type: Array,
        required: [true, "you should spicfy stad fromTime per hour"],
    },
    features: {
        type: Array,
        required: [true, "you should spicfy stad fromTime per hour"],
    },
    features: {
        type: Array,
        required: [true, "you should spicfy stad fromTime per hour"],
    },
    times: {
        type: Map,
        of: Array,
        required: [true, "you should spicfy Avilable Times"],
    },
    createdBy: {
        unique: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserSchema',
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Stadium", StadiumSchema);