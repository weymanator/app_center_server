const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const taskController = require('./controllers/tasks');
const usersController = require('./controllers/users');

const corsMiddleware = require('./middlewares/cors');
const authMiddleware = require('./middlewares/auth');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(corsMiddleware);
app.use(/^\/(?!signin).*$/, authMiddleware);

app.use(taskController);
app.use(usersController);

app.use('/api', require('./controllers/schedulecalendar/router/router'))

app.listen(7000);
