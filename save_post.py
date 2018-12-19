#!/usr/bin/python

post_insert_query = "INSERT INTO posts (title, company, location, ez_apply, salary_text, date_posted_text, url, body) VALUES (%s, %s, %s, %s, %s, %s, %s, %s);"

def save_post(post_obj):

	import pymysql
	# Open database connection
	db = pymysql.connect(
	    host = '127.0.0.1',
	    port = 8889,
	    user = 'root',
	    passwd = 'root',
	    db = 'db_mka'
	)
	# prepare a cursor object using cursor() method
	cursor = db.cursor()

	# execute SQL query using execute() method.
	cursor.execute(post_insert_query, (post_obj.title, post_obj.company, post_obj.location, post_obj.ez_apply, post_obj.salary, post_obj.date_posted_text, post_obj.url, post_obj.post_text))

	# Commit
	db.commit()

	# disconnect from server
	cursor.close()
	db.close()
