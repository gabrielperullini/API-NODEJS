const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('port', process.env.PORT || 3500); //valido en que port estoy escuchando

// Configurar cabeceras y cors
 app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Allow', 'GET');
    next();
 });



app.use(morgan('dev')); // utilizo morgan para ver las peticiones por consola
app.use(express.urlencoded({'extended' : false})); //solo peticiones de texto


//app.use(require('routes/index'));

app.use(require('./routes/index'));


app.listen(app.get('port'), () =>{
   console.log("server run in port 3500"); 
});