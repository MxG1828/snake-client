const { IP, PORT } = require("./constants");
const net = require("net");
const stdin = process.stdin;
stdin.setEncoding("utf-8");
stdin.resume();

const connect = function () {
  const conn = net.createConnection({
    IP,
    PORT,
  });
  conn.on("connect", () => {
    console.log("connected");
    conn.write("Name: XBC");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.setEncoding("utf8");
  return conn;
};
module.exports = { connect };
