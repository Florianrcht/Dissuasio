from ntscraper import Nitter
import re
import requests
import json

scraper = Nitter()
tweets = ""

tweetsOpexNews = scraper.get_tweets("OpexNews", mode='user', number=20)
tweetsEtatMajorFR = scraper.get_tweets("EtatMajorFR", mode='user', number=20)
tweetsDGA = scraper.get_tweets("DGA", mode='user', number=20)

tweets += tweetsOpexNews
tweets += tweetsEtatMajorFR
tweets += tweetsDGA

headers = {'Content-Type': 'application/json'}

try:
    r = requests.post(url="https://dissuasio.fr:3001/api/PostTwitter/Scrap", json=tweets, headers=headers)
    print(r.status_code)
    print(r.text)
except requests.exceptions.RequestException as e:
    print(e)
