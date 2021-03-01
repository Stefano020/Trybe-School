/* eslint-disable quote-props */
/* eslint-disable quotes */
db.voos.findOne({ $and: [{ litrosCombustivel: { $lt: 600 } }, { $nor: [{ "empresa.nome": "GOL" }, { "empresa.nome": "AZUL" }] }, { litrosCombustivel: { $exists: true } }] }, { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 });
