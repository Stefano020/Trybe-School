/* eslint-disable quotes */
db.voos.find({ $and: [{ "aeroportoDestino.continente": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] } }] }).count();
