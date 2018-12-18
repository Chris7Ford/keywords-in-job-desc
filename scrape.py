#!/usr/bin/python

#to import this into python console, type "python3 -i scrape.py"

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.support.ui import WebDriverWait
import time
driver = webdriver.Chrome()
driver.get("https://www.indeed.com")

wantedJobDesc = "Web Developer"
wantedLoc = "Grand Rapids, MI"
keywords = ["Javascript", "React", "PHP", "CSS"]

def check_exists_by_css(css_path):
	try:
		driver.find_element_by_css_selector(css_path)
	except:
		return False
	return True
#with this below function, we will check to see if element exists first before assigning
#if not, it will give us an error message, telling us where the bad selector is
def assign_by_css(css_path, elementdesc):
	if check_exists_by_css(css_path):
		return driver.find_element_by_css_selector(css_path)
	else:
		print("Check the selector at", elementdesc)
def clear_field(element):
	while jobLocInput.get_attribute("value") != '':
		element.send_keys(Keys.ARROW_RIGHT)
		element.send_keys(Keys.BACKSPACE)

def get_post_info(post):
	title = post.find_element_by_css_selector(".jobtitle")
	post_id = post.get_attribute("id")
	title.click()
	time.sleep(1)
	print(title.get_attribute("innerText"))
	print("The post id is:", post_id)
	post_text = driver.find_element_by_css_selector("#vjs-desc").text
	try:
		ez_apply = post.find_element_by_css_selector(".iaP").text
	except:
		ez_apply = False
	try:
		salary = post.find_element_by_css_selector(".salary").text
	except:
		salary = False
	try:
		date_posted = post.find_element_by_css_selector(".date").text
	except:
		date_posted = False
	try:
		title = post.find_element_by_css_selector(".jobtitle").text
	except:
		title = False
	try:
		location = post.find_element_by_css_selector(".location").text
	except:
		location = False
	url = driver.current_url
	print("Title =", title)
	print("Location =", location)
	print("EZ APPLY =", ez_apply)
	print("Salary =", salary)
	print("Date posted =", date_posted)
	print("Post url =", url)
	print(post_text)
	for word in keywords:
		print(word, ": ", post_text.count(word))


jobDescInput = assign_by_css(".icl-WhatWhere-input--what input", "Main job description search box")
jobLocInput = assign_by_css(".icl-WhatWhere-input--where input", "Main location search box")
jobDescInput.send_keys(wantedJobDesc)
clear_field(jobLocInput)	
jobLocInput.send_keys(wantedLoc)
submitbtn = assign_by_css("#whatWhere button", "Main menu submit button")
submitbtn.click()
#We are now off the home page
postings = driver.find_elements_by_css_selector(".jobsearch-SerpJobCard")
def get_posts():
	for post in postings:
		get_post_info(post)
def go_to_next_page():
	1==1
get_posts()	
