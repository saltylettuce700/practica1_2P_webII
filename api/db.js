const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce'
});

connection.connect((err)=> {
    if(err)throw err;
    console.log('Conectao mai eskiu el');
});

module.exports = connection;