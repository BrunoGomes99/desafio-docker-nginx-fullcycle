const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(config);

var resultadoBusca = "";

// Inserção
const insertQuery = `INSERT INTO people(name) values('Bruno');`;
connection.query(insertQuery);

// Select
const selectQuery = 'SELECT * FROM people LIMIT 1';
connection.query(selectQuery, (error, results, fields) => {
    if (error) {
      console.error(error);
      throw error;
    }
      
    if (results.length > 0)
      resultadoBusca = results[0].name;
});

connection.end();

app.get('/', (req, res) => {
    res.send(`<h1>Full Cycle Rocks!</h1><p>${resultadoBusca}</p>`)
})

app.listen(port);