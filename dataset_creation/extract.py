import tweepy as tw
import csv

access_token = '1278165229004718081-62nBSL0dv4OU37xXTCltoz9Bk4sg1L'
access_token_secret = 'UFaQpIgzs1cz7zxIB3TfEcopghUIAzg5uFyDobY4iuwbn'
api_key = 'NpZucVrr5mQcn8CPlvKU5N3vu' 
api_secret_key = '6NHnCH3gtbud8b9z5a1mh6WOgxbw1RU3FBOrjxQXdKIKphPcxz'

# Authentication
auth = tw.OAuthHandler(api_key,api_secret_key) 
auth.set_access_token(access_token,access_token_secret) 
api = tw.API(auth,wait_on_rate_limit=True)

# Data extraction details
search_word = '#thesuicidesquad' 
date_since = '2020-04-15'
no_of_tweets = 100
tweets = tw.Cursor(api.search,q = search_word, lang ='en',since = date_since).items(no_of_tweets)

# Data to be extracted
tweet_details = [[tweet.geo,tweet.text,tweet.user.screen_name,tweet.user.location]for tweet in tweets]

# Creating a CSV file of extracted data
with open("tweets_100.csv", "w+") as file:
    writer = csv.writer(file, delimiter='|')
    writer.writerows(tweet_details)
