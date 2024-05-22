from ntscraper import Nitter
import re
import requests
import json

scraper = Nitter()

tweets = scraper.get_tweets("OpexNews", mode='user', number=1)
user_list = []
link_list = []
content_list = []
tags_list = []

for tweet in tweets["tweets"]:
    user_list.append(tweet['user']['username'])
    link_list.append(tweet['link'])
    content_list.append(tweet['text'])
    print(content_list)

for content in content_list:
    tags_list.append(re.findall(r"#(\w+)", content))

jsonData = {
    "user": user_list,
    "link": link_list,
    "content": content_list,
    "tags": tags_list
}

headers = {'Content-Type': 'application/json'}

try:
    r = requests.post(url="https://dissuasio.fr:3001/api/PostTwitter/Scrap", json=jsonData, headers=headers)
    print(r.status_code)
    print(r.text)
except requests.exceptions.RequestException as e:
    print(e)
