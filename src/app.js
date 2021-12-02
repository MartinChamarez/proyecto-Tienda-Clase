const express = require('express');
const app = express();
const routes = require('./routes/tiendaRoutes');
const path = require('path');
const dataBaseConnection = require('../config/database');
const port = process.env.PORT || 4000;

//coneccion con MySQL (ejecutamos la funcion anterior)
dataBaseConnection.connect();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


//uso de EJS y de archivos publicos

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


//rutas
app.use("",routes)


app.listen(port,()=>{
    console.log("Corriendo en puerto " + port);
}) 