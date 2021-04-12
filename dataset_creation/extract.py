import tweepy as tw
import csv
import json
from datetime import datetime
from datetime import timedelta
from collections import Counter
from tweepy.auth import OAuthHandler
from textblob import TextBlob


def getAccountInfo(username):
    print("Analysing "+username)
    hashtags = []
    mentions = []
    tweet_count = 0
    tweetsToAnalyse = 10
    end_date = datetime.utcnow() - timedelta(days=365)
    for status in tw.Cursor(api.user_timeline, id=username).items(tweetsToAnalyse):
        tweet_count += 1
        if hasattr(status, "entities"):
            entities = status.entities
        if "hashtags" in entities:
            for ent in entities["hashtags"]:
                if ent is not None:
                    if "text" in ent:
                        hashtag = ent["text"]
                    if hashtag is not None:
                        hashtags.append(hashtag)
        if "user_mentions" in entities:
            for ent in entities["user_mentions"]:
                if ent is not None:
                    if "screen_name" in ent:
                        name = ent["screen_name"]
                    if name is not None:
                        mentions.append(name)
        if status.created_at < end_date:
            break

    print("Most mentioned Twitter users:")
    for item, count in Counter(mentions).most_common(10):
        print(item + "\t" + str(count))

    print
    print("Most used hashtags:")
    for item, count in Counter(hashtags).most_common(10):
        print(item + "\t" + str(count))

    print
    print("Processed " + str(tweet_count) + " tweets from @" + username)

    item = api.get_user(username)
    # print(item)
    print("name: " + item.name)
    print("screen_name: " + item.screen_name)
    print("description: " + item.description)
    print("statuses_count: " + str(item.statuses_count))
    print("friends_count: " + str(item.friends_count))
    print("followers_count: " + str(item.followers_count))

    return([item.statuses_count, item.friends_count, item.followers_count])


def checkPositivity(username):
    blob = TextBlob(tweet)
    for sentence in blob.sentences:
        print(sentence.sentiment.polarity)


usersList = []

access_token = '1278165229004718081-62nBSL0dv4OU37xXTCltoz9Bk4sg1L'
access_token_secret = 'UFaQpIgzs1cz7zxIB3TfEcopghUIAzg5uFyDobY4iuwbn'
api_key = 'NpZucVrr5mQcn8CPlvKU5N3vu' 
api_secret_key = '6NHnCH3gtbud8b9z5a1mh6WOgxbw1RU3FBOrjxQXdKIKphPcxz'


# Authentication
auth = tw.OAuthHandler(api_key,api_secret_key) 
auth.set_access_token(access_token,access_token_secret) 
api = tw.API(auth,wait_on_rate_limit=True)

# Data extraction details
search_word = 'life' 
date_since = '2020-04-01'
no_of_tweets = 10
tweets = tw.Cursor(api.search,q = search_word, lang ='en',since = date_since).items(no_of_tweets)

# Format of the tweet in the CSV
tweetFormat = [["Geo","Tweet","Username","Location","Followees","Followers","No of posts"]]

# Data to be extracted
tweet_details = [[tweet.geo,tweet.text,tweet.user.screen_name,tweet.user.location, api.get_user(tweet.user.screen_name).friends_count, api.get_user(tweet.user.screen_name).followers_count, api.get_user(tweet.user.screen_name).statuses_count]for tweet in tweets]

print(tweet_details)

# for tweet in tweet_details:
#     tweet.append(getAccountInfo(tweet[2]))
#     print(tweet)


# Creating a CSV file of extracted data
with open("tweets_100.csv", "w+") as file:
    writer = csv.writer(file, delimiter=',')
    writer.writerows(tweetFormat)
    writer.writerows(tweet_details)