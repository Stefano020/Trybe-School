/* eslint-disable quote-props */
/* eslint-disable quotes */
db.voos.findOne({ litrosCombustivel: { $gte: 1000 } }, { _id: 0, vooId: 1 });
