const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const apiRoutes = require('./noticias/routes');

if(process.env.NODE_ENV === 'dev'){
    require('dotenv').config();
}

const port = process.env.PORT | 3000;

app.listen(port, () => {
    console.log('App is listening to port: ' + port);
});

app.use(router);
app.use('/', apiRoutes);