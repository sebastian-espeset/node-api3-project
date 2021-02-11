const server = require("./api/server");

// require your server and launch it
const port= 5000;

server.listen(port,()=>{
    console.log(`server up at localhost: ${port}`)
})
