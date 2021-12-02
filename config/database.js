const mysql = require('mysql2');

const dataBaseConnection=mysql.createConnection({
    host: 'bknnpmqkqshgy3ugn4dz-mysql.services.clever-cloud.com',
    user: 'uxclkgv4gugkp99a',
    database: 'bknnpmqkqshgy3ugn4dz',
    password: 'SGqgxrl7VhzXUrIjL6pd'
});

dataBaseConnection.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Server conectado a DB")
    }
});

module.exports = dataBaseConnection;