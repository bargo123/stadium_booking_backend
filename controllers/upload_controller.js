const { AggregationCursor } = require("mongoose");

const cloudinary = require("cloudinary").v2;

const uploadImage = async(req, res) => {
    var result;
    var images = [];
    if (!req.files) {}
    try {
        await Promise.all(req.files.images.map(async element => {
            result = await cloudinary.uploader.upload(element.tempFilePath);
            images.push(result.url);
        }))

        res.status(200).json({ images });
    } catch (error) {
        return res.status(500).send("you should spucuify images");
    }
}
module.exports = uploadImage;