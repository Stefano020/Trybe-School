/* eslint-disable quotes */
db.voos.find({ $or: [{ "aeroportoDestino.pais": "BRASIL" }, { "aeroportoDestino.pais": "CHILE" }, { "aeroportoDestino.pais": "ARGENTINA" }] }).count();
