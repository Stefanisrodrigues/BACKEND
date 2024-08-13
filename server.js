const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const app = express();

app.use(express.json());

const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const ProductOptionController = require('./controllers/ProductOptionController');
const UserCreateValidation = require("./middleware/UserCreateValidation")
const JwtVerifyToken = require("./middleware/JwtVerifyToken");

const PrivateRoutes = express.Router();

PrivateRoutes.use(JwtVerifyToken);

app.get('/products', ProductController.list);
PrivateRoutes.post('/products', ProductController.create);


app.get('/users', UserController.list);
PrivateRoutes.post('/users', UserCreateValidation, UserController.create)
app.post('/login', UserController.login);
PrivateRoutes.put('/users/:id', UserController.update);
PrivateRoutes.delete('/users/:id', UserController.delete);

app.get('/category', CategoryController.list);

app.get('/products', ProductOptionController.list);
PrivateRoutes.post('/products', ProductOptionController.create);

app.use(PrivateRoutes);

app.listen(3000);