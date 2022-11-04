const app = require("./app");
const dotenv = require("dotenv");

// config

dotenv.config({path:"server/config/.env"})


const PORT = process.env.port;
app.listen(PORT, () => {
    console.log(`server is working on http://localhost:${PORT}`);
})