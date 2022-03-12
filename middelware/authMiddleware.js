const jwt = require("jsonwebtoken");

const authrize = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token || (!token.startsWith("bearer "))) {
        return res.status(401).send("Please Provide valid credintals");
    }

    const slipttedToken = token.split(" ")[1];

    try {
        const decodeValue = jwt.verify(slipttedToken, process.env.JWT_SECRET);
        req.body.createdBy = decodeValue.id;
        next();
    } catch (error) {
        return res.status(401).send(error);
    }
};

module.exports = authrize;