const mongoose = require("mongoose");



const StadiumSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "you should spicfy stad name"],
    },
    price: {
        type: String,
        required: [true, "you should spicfy stad price per hour"],
    },
    days: {
        type: Map,
        required: [true, "you should spicfy stad Days"],

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
    timesOfDay: {
        type: Map,
        of: Map,
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