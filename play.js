const net = require('net');
const stdin = process.stdin;
stdin.setEncoding('utf-8');
stdin.resume();

const connect = function() {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542,
  });
  conn.on("data",(data) =>{
    console.log(data);
  });
  conn.setEncoding('utf8');
  return conn;
};


console.log ('Connecting...');
connect();