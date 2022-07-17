//dependencies
const app = require("./app");
//configuration
require("dotenv").config();

//eviorn variables
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})