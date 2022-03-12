require("dotenv").config();
require("cloudinary").v2.config({
    cloud_name: 'dmqvcobsz',
    api_key: '227841129711442',
    api_secret: 'iKKO_YOxsOzQG8UCr54ByiXVOSs'
});
const imageUploader = require("express-fileupload");
const express = require("express");
const app = express();
const dbConnection = require("./database_models/db_connection");
const stadiumRoutes = require("./routes/stadiums_routes");
const authRoutes = require("./routes/login_routes");
const authMidlleWare = require("./middelware/authMiddleware");
const fileUpload = require("express-fileupload");

const port = 3000;
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
}))

app.use('/api/v1/auth', authRoutes);
app.use("/api/v1", authMidlleWare, stadiumRoutes);

dbConnection(process.env.MONGOOSE_URI).then(() => {
    app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
    );
});