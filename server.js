//dependencies
const app = require("./app");
//configuration
// require("dotenv").config();

//eviorn variables
// const PORT = process.env.PORT;
// console.log(PORT)
app.listen(8080, () => {
    console.log(`Listening on port 8080`);
})