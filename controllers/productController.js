const getCatalogue = (request, response) => {
  const catalogueServices = require("../services/productServices");
  catalogueServices.searchService(function (err, rows) {
    response.render("catalogue", { products: rows });
  });
};

const getProductByID = (request, response) => {
  const catalogueServices = require("../services/productServices");
  let reference = request.params.id;
  catalogueServices.searchIDService(reference, function (err, rows) {
    response.render("article", { product: rows });
  });
};

const getProductsByCategory = (request, response) => {
  const catalogueServices = require("../services/productServices");
  let reference = request.params.category;
  catalogueServices.searchCategoryService(category, function (err, rows) {
    response.json(rows);
    response.end();
  });
};

module.exports = {
  getCatalogue,
  getProductByID,
  getProductsByCategory,
};
