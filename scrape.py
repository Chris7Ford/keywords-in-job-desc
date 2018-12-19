#!/usr/bin/python

#to import this into python console, type "python3 -i scrape.py"

from save_post import save_post
from db import get_max_search_id
from db import get_job_desc
from db import get_location
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.support.ui import WebDriverWait
import time
driver = webdriver.Chrome()
driver.get("https://www.indeed.com")

class post_class:
	title = False
	company = False
	post_id = False
	post_text = False
	ez_apply = False
	salary = False
	date_posted_text = False
	location =  False
	url = False

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
	while element.get_attribute("value") != '':
		element.send_keys(Keys.ARROW_RIGHT)
		element.send_keys(Keys.BACKSPACE)

def get_post_info(post, search_id):
	post_obj = post_class()
	title = post.find_element_by_css_selector(".jobtitle")
	post_obj.post_id = post.get_attribute("id")
	title.click()
	time.sleep(1)
	post_obj.search_id = search_id
	try:
		post_obj.post_text = driver.find_element_by_css_selector("#vjs-desc").text
	except:
		time.sleep(3)
		post_obj.post_text = driver.find_element_by_css_selector("#vjs-desc").text
	try:
		post_obj.ez_apply = post.find_element_by_css_selector(".iaP").text
	except:
		post_obj.ez_apply = False
	try:
		post_obj.company = post.find_element_by_css_selector(".company").text 
	except:
		post_obj.company = False
	try:
		post_obj.salary = post.find_element_by_css_selector(".salary").text
	except:
		post_obj.salary = False
	try:
		post_obj.date_posted = post.find_element_by_css_selector(".date").text
	except:
		post_obj.date_posted = False
	try:
		post_obj.title = post.find_element_by_css_selector(".jobtitle").text
	except:
		post_obj.title = False
	try:
		post_obj.location = post.find_element_by_css_selector(".location").text
	except:
		post_obj.location = False
	post_obj.url = driver.current_url
	save_post(post_obj, search_id)

def navigate_to_results(wantedJobDesc, wantedLoc):
	jobDescInput = assign_by_css(".icl-WhatWhere-input--what input", "Main job description search box")
	jobLocInput = assign_by_css(".icl-WhatWhere-input--where input", "Main location search box")
	jobDescInput.send_keys(wantedJobDesc)
	clear_field(jobLocInput)	
	jobLocInput.send_keys(wantedLoc)
	submitbtn = assign_by_css("#whatWhere button", "Main menu submit button")
	submitbtn.click()
#We are now off the home page
def get_posts(search_id):
	postings = driver.find_elements_by_css_selector(".jobsearch-SerpJobCard")
	for post in postings:
		get_post_info(post, search_id)
def go_to_next_page():
	page_links = driver.find_elements_by_css_selector(".np")
	for link in page_links:
		if link.text.count("Next") > 0:
			link.click()
			time.sleep(1)
			try:
				driver.find_element_by_css_selector(".icl-CloseButton").click()
			except:
				1 == 1
			return 1
	return 0
search_id = 1
max_search_id = get_max_search_id()
while search_id <= max_search_id:
	driver.get("https://www.indeed.com")
	action = 1
	wantedJobDesc = get_job_desc(search_id)
	wantedLoc = get_location(search_id)
	navigate_to_results(wantedJobDesc, wantedLoc)
	while action == 1:
		action = 0
		get_posts(search_id)
		action = go_to_next_page()
	search_id = search_id + 1
