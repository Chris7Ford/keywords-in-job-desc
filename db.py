#!/usr/bin/python

#https://www.youtube.com/watch?v=ITmOVaZ0-ko - connecting python and mamp

import pymysql
def get_max_search_id():
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
	cursor.execute("SELECT id FROM search_criteria ORDER BY id DESC LIMIT 1")

	row = cursor.fetchone()
	max_id = row[0]
	# disconnect from server
	cursor.close()
	db.close()
	return (max_id)

def get_job_desc(search_id):
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
	cursor.execute("SELECT job_desc FROM search_criteria WHERE id = %s", search_id)

	row = cursor.fetchone()
	desc = row[0]
	# disconnect from server
	cursor.close()
	db.close()
	return (desc)

def get_location(search_id):
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
	cursor.execute("SELECT location FROM search_criteria WHERE id = %s", search_id)

	row = cursor.fetchone()
	location = row[0]
	# disconnect from server
	cursor.close()
	db.close()
	return (location)
