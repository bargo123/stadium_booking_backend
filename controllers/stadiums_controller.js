const Stad = require("../database_models/stadium_model");

const getAllSatdiums = async(req, res) => {
    try {
        const ignoredValues = '-features -timesOfDay -days _id -createdAt -updatedAt -__v'
        const stadiums = await Stad.find({}, { "images": { $slice: 1 } }).select(ignoredValues)

        res.status(200).json({ stadiums, length: stadiums.length });
    } catch (error) {
        res.status(500).json(error);
    }
};
const createStadium = async(req, res) => {
    try {
        const user = await Stad.findOne({...req.body.createdBy });
        if (user) {
            return res.status(500).send("stadium is Already created");
        }
        const stad = await Stad.create(req.body);
        res.status(200).json(stad);
    } catch (error) {
        res.status(500).json(error);
    }

};
const getStadium = async(req, res) => {
    try {
        const stadiums = await Stad.findOne({ createdBy: req.params.id });
        res.status(200).json({ stadiums });
    } catch (error) {
        res.status(500).json(error);
    }
};

const bookStadium = async(req, res) => {
    try {
        const stadiums = await Stad.findOne({...req.params.id });
        res.status(200).json({ stadiums });
    } catch (error) {
        res.status(500).json(error);
    }
};



module.exports = { getAllSatdiums, createStadium, getStadium };