var events = require("events");

var eventEmitter = new events.EventEmitter();

function connectionHandler()
{
  console.log("successful connection");
  eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connectionHandler);
eventEmitter.on('data_received',dataHandler);

eventEmitter.emit('connection');

function dataHandler()
{
  console.log("data received!!");
}
