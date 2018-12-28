const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
//	host: '127.0.0.1',
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'db_mka'
});

db.connect((error) => {
	if (error)
		console.log(error);
	else
		console.log("Connection established");
});

const app = express();
app.listen('8889', () => {
	console.log("Server started on port 8889");
});
