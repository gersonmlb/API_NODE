const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//Primeira rota
routes.get("/", (req, res) => {
    return res.send("OK!");
});

routes.get("/products/post", ProductController.index);
routes.get("/products/get/:id", ProductController.show);
routes.post("/products/get", ProductController.store);
routes.put("/products/update/:id", ProductController.update);
routes.delete("/products/delete/:id", ProductController.destroy);

module.exports = routes;