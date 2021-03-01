const Sales = require('../models/sales');

const getAllSales = async() => {
  return await Sales.getAll();
};

const createNewSale = async(sale) => {
  const newSale = await Sales.createSale(sale);

  return newSale;
};

const findSaleById = async(id) => {
  return await Sales.findById(id);
};

const updateSale = async (id, itensSold) => {
  return await Sales.update(id, itensSold);
};

const removeSale = async (id) => {
  return await Sales.remove(id);
};

module.exports = {
  getAllSales,
  createNewSale,
  findSaleById,
  updateSale,
  removeSale,
};
