const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/main');

app.use('/public', express.static(__dirname + '/public'));
app.listen (3000, () => console.log("Servidor corriendo en http://localhost:3000"));

app.use('/', mainRoutes);

app.set('view engine', 'ejs');
app.set('views','./src/views');