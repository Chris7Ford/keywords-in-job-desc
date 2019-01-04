const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
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
	const rows_per_page = 30;
	let page = req.query.page;
	let p = page * rows_per_page
	let query = `SELECT id, title, company, location, ez_apply, salary_text, CONCAT(SUBSTRING(body, 1, 60), '...') AS preview FROM posts WHERE 1=1 `;
	if (req.query.search_id)
		query += `AND search_id = ${req.query.search_id} `;
	query += `LIMIT ${p}, ${rows_per_page};`;
	db.query(query, (error, results) => {
		if (error)
			return res.send(error);
		else {
			return res.json({
				data:results,
			})
		}
	});
});

app.listen('8889', () => {
	console.log("Server started on port 8889");
});
