const Client = require("./client.js");
const qrcode = require("qrcode-terminal");
const listenMessage = require("./listenMesagge.js");

const conectSessionWhatsApp = () => {
  Client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });

  Client.on("authenticated", () => {
    console.log("Autenticado");
  });

  Client.on("auth_failure", (err) => {
    console.log(err, "error en la conexión");
  });

  Client.on("ready", () => {
    console.log("Client is ready!");
    listenMessage();
  });

  Client.initialize();
};

conectSessionWhatsApp();
