const { Buttons } = require("whatsapp-web.js");
const sendMessageClient = require("./sendMessagge.js");

const sendButton = (to) => {
  let button = new Buttons(
    "Eze, voy a buscar la comida?",
    [
      { id: "1", body: "Si" },
      { id: "0", body: "No" },
    ],
    ":D",
    "Elija el boton"
  );
  sendMessageClient(to, button);
};

module.exports = sendButton;
