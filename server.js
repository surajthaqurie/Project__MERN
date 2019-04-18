const htpp = require('http');
const app = require('./app');

const server = htpp.createServer(app);

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`Listening on ${port} on ` + Date(new Date()));
});
