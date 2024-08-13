const connection = require('../database/connection');
const { DataTypes } = require('sequelize');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const ProductOptionModel = require('../models/ProductOptionModel');

const ProductOptionController = {

    create(request, response) {
        ProductOptionModel.create(request.body);
        response.json({
            message: ""
        });
    },

    async list(request, response) {
        const product_options = await ProductOptionModel.findAll();
        response.json(product_options);
    }
}
module.exports = ProductOptionController;