const Client = require("./client.js");

const sendMessageClient = (to, message) => {
  Client.sendMessage(to, message);
};

module.exports = sendMessageClient;
