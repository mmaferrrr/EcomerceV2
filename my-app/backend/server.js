const express = require('express');
const mysql = require ('mysql2');
const path = require('path');

const app = express();
const port = 4040;

const connection = mysql.createConnection( {
host: 'sql5.freesqldatabase.com',
database: 'sql5721444',
user: 'sql5721444',
password: 'RWUIJtdBKz',
port: 3306
})

app.use(express.json());

connection.connect((err) => {
    if (err) throw err;
    console.log('My SQL DATABASE IS CONNECTED');
});

app.use(express.static(path.join(__dirname, 'build')));


app.get('/api/products', (req, res) => {
    const query = `SELECT * FROM Products`;
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(results);
    });
  })

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});