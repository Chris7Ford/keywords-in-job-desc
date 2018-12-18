#!/usr/bin/python

#https://www.youtube.com/watch?v=ITmOVaZ0-ko - connecting python and mamp

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
cursor.execute("INSERT INTO posts (title, location, ez_apply, salary_text, date_posted_text, url, body) VALUES ('React Developer', 'Grand RApids', '1', '100,000', '1 week ago', 'google,com','test text');")

# Commit
db.commit()

# disconnect from server
cursor.close()
db.close()
