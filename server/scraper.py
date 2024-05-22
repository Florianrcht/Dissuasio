from ntscraper import Nitter
import re
import requests
import json

scraper = Nitter()

tweets = scraper.get_tweets("OpexNews", mode='user', number=1)

headers = {'Content-Type': 'application/json'}

try:
    r = requests.post(url="https://dissuasio.fr:3001/api/PostTwitter/Scrap", json=tweets, headers=headers)
    print(r.status_code)
    print(r.text)
except requests.exceptions.RequestException as e:
    print(e)
