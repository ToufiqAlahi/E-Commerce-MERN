const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase =require("./config/database")


// config
dotenv.config({ path: "server/config/.env" })

// connecting to DB
connectDatabase();


const PORT = process.env.port;
app.listen(PORT, () => {
    console.log(`server is working on http://localhost:${PORT}`);
})