const express = require('express');
const bodyParser = require('body-parser');

const taskController = require('./controllers/tasks');
const usersController = require('./controllers/users');
const contactoShidoController = require('./controllers/contactoshido');

const corsMiddleware = require('./middlewares/cors');
const authMiddleware = require('./middlewares/auth');

const app = express();

app.use(bodyParser.json());

app.use(corsMiddleware);
app.use(/^\/(?!signin).*$/, authMiddleware);

app.use(taskController);
app.use(usersController);
app.use(contactoShidoController);

app.listen(7000);
