const app = require("./app");
const http = require("http");
const port = 5000;

app.set(port);
const server = http.createServer(app);

server.listen(port, () => console.log(`App running on ${port}!`))