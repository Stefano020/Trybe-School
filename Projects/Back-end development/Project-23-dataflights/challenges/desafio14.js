/* eslint-disable quotes */
db.voos.find({ "aeroportoOrigem.pais": { $ne: "BRASIL" } }).count();
