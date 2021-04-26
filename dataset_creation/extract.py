import tweepy as tw
import csv
import re
from tweepy.auth import OAuthHandler
import nltk.tokenize
from nltk.corpus import stopwords

def readwords( filename ):
    f = open(filename)
    words = [ line.rstrip() for line in f.readlines()]
    return words

def posNeg(paragraph):
	positive = readwords('positive.txt')
	negative = readwords('negative.txt')
	punctuations = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
	no_punct = ""
	for char in paragraph:
	   if char not in punctuations:
		   no_punct = no_punct + char		   
	words=no_punct.split()
	pos = 0
	neg = 0
	for w in words:
		if w in positive:
		    pos += 1
		if w in negative:
		    neg += 1
	return pos,neg
	
def cleaning(tweet):
	tweet = re.sub('@[\w]+','',tweet)
	tweetCleaned = re.sub(r"http\S+", "", tweet)
	tweetWithoutSpChars = re.sub(r'[^\w\s]','',tweetCleaned)
	return tweetWithoutSpChars

# Counts the number of words in tweet
def countWords(tweet):
	tweetList = tweet.split(" ")
	return(len(tweetList))
	
def tokenize(line):
	return nltk.tokenize.word_tokenize(line)
	
def stop_words(line):
	swords = set(stopwords.words('english')) 

	words = line.split() 
	f=[]
	for i in words: 
		if not i in swords: 
			f.append(i)
	return f

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

tweetDetails = [["Tweet", "Followees", "Followers", "No of posts", "Retweet count", "Favorite count", "Positive words", "Negative words", "No: of Words"]] # Format of the tweet and details in the CSV file
api = apiAuth()

# Data extraction details
searchWord = "hopeless OR aching OR worthless OR useless OR stupid OR untethered OR adrift OR afraid"
noOfTweets = 25
tweetStatus = 0

print("\nExtracting tweets....\n")

tweets = tw.Cursor(api.search, q = searchWord, lang ='en', exclude='retweets').items(noOfTweets)

# Looping to find User Details and Data to be extracted
for tweet in tweets:
	tweetStatus += 1
	print("Progress: " + str(tweetStatus) + "/" + str(noOfTweets) + " tweets", end="\r")
	pos, neg = posNeg(tweet.text)
	countOfWords = countWords(tweet.text)
	try:
		tweetDetails.append([cleaning(tweet.text), api.get_user(tweet.user.screen_name).friends_count, api.get_user(tweet.user.screen_name).followers_count, api.get_user(tweet.user.screen_name).statuses_count, tweet.retweet_count, tweet.favorite_count, pos, neg, countOfWords])
	except:
		print("Connection error occurred!\n\n")
	
	# Creating a CSV file of extracted data
	with open("tweets_test.csv", "w+") as file:
		writer = csv.writer(file, delimiter=',')
		writer.writerows(tweetDetails)

