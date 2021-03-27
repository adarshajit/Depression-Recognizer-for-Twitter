import tweepy
from tweepy.auth import OAuthHandler

# Generate your own keys from your twitter devoloper account 
ACCESS_TOKEN = ''
ACCESS_SECRET = ''
CONSUMER_KEY = ''
CONSUMER_SECRET = ''


# Setup access to API
def connect_to_twitter_OAuth():
    auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(ACCESS_TOKEN, ACCESS_SECRET)

    api = tweepy.API(auth)
    return api


# API object creation done 
api = connect_to_twitter_OAuth()


# Fetches recent tweets from your homefeed
public_tweets = api.home_timeline()
for tweet in public_tweets:
    print(tweet.text)



# fetch and add the tweets to a file -- next task
