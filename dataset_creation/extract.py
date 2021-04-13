import tweepy as tw
import csv
import json
from datetime import datetime
from datetime import timedelta
from collections import Counter
from tweepy.auth import OAuthHandler
from textblob import TextBlob


def getAccountInfo(username):
    print("\nAnalysing @" + username + "\n")
    hashtags = []
    mentions = []
    userMentions = 0
    tweet_count = 0
    tweetsToAnalyse = 1000
    end_date = datetime.utcnow() - timedelta(days=365)
    for status in tw.Cursor(api.user_timeline, id=username).items(tweetsToAnalyse):
        tweet_count += 1
        print("Number of tweets analysed = ", tweet_count, end="\r")
        if hasattr(status, "entities"):
            entities = status.entities
        if "user_mentions" in entities:
            if(entities["user_mentions"] != []):
                userMentions += 1
            for ent in entities["user_mentions"]:
                if ent is not None:
                    if "screen_name" in ent:
                        name = ent["screen_name"]
                    if name is not None:
                        mentions.append(name)
        if status.created_at < end_date:
            break

    print("\nUser mentions: " + str(userMentions))
    print("\nProcessed " + str(tweet_count) + " tweets from @" + username)

    return userMentions


def checkPositivity(tweet):
    blob = TextBlob(tweet)
    for sentence in blob.sentences:
        return sentence.sentiment.polarity


# Authentication
def apiAuth():
    accessToken = '1278165229004718081-62nBSL0dv4OU37xXTCltoz9Bk4sg1L'
    accessTokenSecret = 'UFaQpIgzs1cz7zxIB3TfEcopghUIAzg5uFyDobY4iuwbn'
    apiKey = 'NpZucVrr5mQcn8CPlvKU5N3vu' 
    apiSecretKey = '6NHnCH3gtbud8b9z5a1mh6WOgxbw1RU3FBOrjxQXdKIKphPcxz'

    auth = tw.OAuthHandler(apiKey,apiSecretKey) 
    auth.set_access_token(accessToken,accessTokenSecret) 
    api = tw.API(auth,wait_on_rate_limit=True)
    return api

usersList = []
tweetDetails = []
api = apiAuth()
tweetsFetched = 0


# Data extraction details
searchWord = 'life' 
dateSince = '2020-04-01'
noOfTweets = 1

print("\nExtracting tweets....")

tweets = tw.Cursor(api.search,q = searchWord, lang ='en',since = dateSince).items(noOfTweets)

# Format of the tweet and details in the CSV file
tweetFormat = [["Geo","Tweet","Username","Location","Followees","Followers","No of posts", "User Mentions"]]

# Looping to find User Details and Data to be extracted
for tweet in tweets:
    getAccountInfo(tweet.user.screen_name)
    tweetDetails.append([tweet.geo, tweet.text, tweet.user.screen_name, tweet.user.location, api.get_user(tweet.user.screen_name).friends_count, api.get_user(tweet.user.screen_name).followers_count, api.get_user(tweet.user.screen_name).statuses_count, getAccountInfo(tweet.user.screen_name)])

# Creating a CSV file of extracted data
with open("tweets_100.csv", "w+") as file:
    print("\nWriting to CSV file...")
    writer = csv.writer(file, delimiter=',')
    writer.writerows(tweetFormat)
    writer.writerows(tweetDetails)

print("\nProcess completed successfully!")