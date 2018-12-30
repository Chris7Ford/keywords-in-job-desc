const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
//	host: '127.0.0.1',
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'db_mka'
});

const app = express();

db.connect((error) => {
	if (error)
		console.log(error);
	else
		console.log("Connection established");
});

app.get('/', (req, res) => {
	db.query("SELECT * FROM posts LIMIT 1;", (error, results) => {
		if (error)
			return res.send(error);
		else {
			return res.json({
				data:results
			})
		}
	});
});

app.listen('8889', () => {
	console.log("Server started on port 8889");
});
