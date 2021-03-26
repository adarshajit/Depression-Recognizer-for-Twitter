import tweepy

# Generate your own keys from your twitter devoloper account 
ACCESS_TOKEN = '2468043158-vIq9XqpHyvaReVWnhctdmrvKKjHz0CKtsYuvotf'
ACCESS_SECRET = '5pP8dNXeF0XkcFui528TesCd8wb0T1tipAR1aaBhTAAtM'
CONSUMER_KEY = 'uBEuVSDAoXWYw3Z7VAjGLtdXj'
CONSUMER_SECRET = 'UfC7b5ACaN2sXp00GofBxz4Eq04kSc5UmUw9RR9m3myDPNN9G7'


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



# fetch and add the tweets to a file