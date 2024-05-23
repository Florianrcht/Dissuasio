from ntscraper import Nitter
import re
import requests
import json

scraper = Nitter()
tweets = []

# Scraping tweets from OpexNews
try:
    print('<<<--Scraping OpexNews[1] tweets-->>>')
    tweetsOpexNews = scraper.get_tweets("OpexNews", mode='user', number=2)
    print('OpexNews[1] => Réussi')     
except requests.exceptions.RequestException as e:
    print('OpexNews[1] => Erreur')     
    print(e)
finally:
    print('>>>--Scraping OpexNews[1] tweets--<<<')
    print('')
    
# Scraping tweets from EtatMajorFR
try:
    print('<<<--Scraping EtatMajorFR[2] tweets-->>>')
    tweetsEtatMajorFR = scraper.get_tweets("EtatMajorFR", mode='user', number=2)
    print('EtatMajorFR[2] => Réussi')
except requests.exceptions.RequestException as e:
    print('EtatMajorFR[2] => Erreur')
    print(e)
finally:
    print('>>>--Scraping EtatMajorFR[2] tweets--<<<')
    print('')
    
# Scraping tweets from DGA
try:
    print('<<<--Scraping DGA[3] tweets-->>>')
    tweetsDGA = scraper.get_tweets("DGA", mode='user', number=2)
    print('DGA[3] => Réussi')
except requests.exceptions.RequestException as e:
    print('DGA[3] => Erreur')
    print(e)
finally:
    print('>>>--Scraping DGA[3] tweets--<<<')
    print('')

tweets.append({"tweets": tweetsOpexNews})
tweets.append({"tweets": tweetsEtatMajorFR})
tweets.append({"tweets": tweetsDGA})

# Transforming tweets into the desired JSON structure
transformed_json = {
    "req_tweets": tweets
}

headers = {'Content-Type': 'application/json'}
print(transformed_json)
try:
    r = requests.post(url="https://dissuasio.fr:3001/api/PostTwitter/Scrap", json=transformed_json, headers=headers)
    print(r.status_code)
    print(r.text)
except requests.exceptions.RequestException as e:
    print(e)