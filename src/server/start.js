const app= require('./server.js');

const port = 8081;
const listening = () => {
  console.log("initialize server:\n");
  console.log(`server running on port ${port}`);
};
const server= app.listen(port,listening);