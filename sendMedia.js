const { MessageMedia } = require("whatsapp-web.js");
const sendMessageClient = require("./sendMessagge.js");

const sendMedia = (to, file) => {
  const mediaFile = MessageMedia.fromFilePath(`./assets/${file}`);
  sendMessageClient(to, mediaFile);
};

module.exports = sendMedia;
