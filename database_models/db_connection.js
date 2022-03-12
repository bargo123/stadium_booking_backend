const mongoose = require("mongoose");

const connect = async(url) => {
    try {
        await mongoose.connect(url);
        console.log("DB Connected");
    } catch (error) {
        console.log(`Connection Error ${error}`);
    }
}
module.exports = connect;