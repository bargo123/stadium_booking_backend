const User = require('../database_models/user_database');
const jwt = require('jsonwebtoken');




const login = async(req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email && !password) {
        return res.status(401).json({ error: "provide data please" });
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ error: "password does not match" });
    }
    const passwordMatch = await user.passwordMatch(password);
    if (!passwordMatch) {
        return res.status(400).json({ error: "password does not match" });
    }
    const token = user.genToken();

    res.status(200).json({ user: user, token: token });

};
const regester = async(req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    if (!name && !email && !password) {
        res.status(401).json({ error: "provide data please" });
    }
    try {
        const user = await User.create(req.body);
        const token = user.genToken();
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json("already");

    }
};
module.exports = { login, regester };
module.exports = { login, regester };