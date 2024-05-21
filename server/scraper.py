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
    user_list.append(tweet['user'])
    link_list.append(tweet['link'])
    content_list.append(tweet['text'])
    print(content_list)

for content in content_list:
    tags_list.append(re.findall(r"#(\w+)", content))

print(tags_list)

jsonData = {
    "user": user_list,
    "link": link_list,
    "content": content_list,
    "tags": tags_list
}

headers = {'Content-Type': 'application/json'}

r = requests.post(url="https://dissuasio.fr:3001/api/PostTwitter/Scrap", data=json.dumps(jsonData), headers=headers)

print(r.status_code)
print(r.text)
