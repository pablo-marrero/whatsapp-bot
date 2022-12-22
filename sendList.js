const { List } = require("whatsapp-web.js");
const sendMessageClient = require("./sendMessagge");

const sendList = (to) => {
  const list = new List(
    "Titulo",
    "subtitulo",
    [
      {
        title: "Titulo de lista",
        rows: [
          { id: "prueba 1", title: "Prueba 1" },
          { id: "prueba 2", title: "Prueba 2" },
          { id: "prueba 3", title: "Prueba 3" },
        ],
      },
    ],
    "Seleccion de prueba"
  );
  sendMessageClient(to, list);
};

module.exports = sendList;
