const Client = require("./client.js");
const sendMessageClient = require("./sendMessagge.js");
const sendMedia = require("./sendMedia.js");
const sendButton = require("./sendButton.js");
const sendList = require("./sendList.js");
const sendContac = require("./sendContact.js");

const listenMessage = () => {
  Client.on("message", async (msg) => {
    const { from, to, body } = msg;
    // console.log(from, to, body);

    let mess = body.toLocaleLowerCase().trim();
    // console.log(msg.type);
    // console.log("*********************");
    // console.log(msg.deviceType);

    console.log(from, "soy el from");
    if (from === "5491166755482@c.us") {
      switch (mess) {
        case "contacto proveedores":
          sendMedia(from, "whatsApp.jpeg");
          break;

        case "saludo":
          sendMessageClient(from, "Buenas Tardes");
          break;

        case "boton":
          sendButton(from);
          break;

        case "list":
          sendList(from);
          break;

        case "contacto":
          let arrayContacs = await Client.getContacts();
          let contacto = arrayContacs.filter(
            (contac) => contac.name === "Ezequiel Trabajo"
          );
          console.log(contacto);
          sendMessageClient(from, contacto);
          break;
        default:
          sendMessageClient(
            from,
            "Gracias por comunicarte con la mesa de ayuda"
          );
          break;
      }
    } else {
      return null;
    }
  });
};

module.exports = listenMessage;

/*
type:
    chat,
    
*/
