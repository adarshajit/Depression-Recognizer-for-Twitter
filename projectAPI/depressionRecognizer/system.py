import pandas as pd
import numpy as np
import csv
import tweepy as tw
import csv
import re
from tweepy.auth import OAuthHandler
import nltk.tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn import metrics


accessToken = '2210845584-ChruE1rERcvIRGmVTqn3UDvLrW3h9hXtOodu9Ec'
accessTokenSecret = '3WhULUNaC3Bw98t0osC0iVtYS99fI6Ktd0OozOevVnYD3'
apiKey = 'H6YCAwHAXnEj9Zi1y3pzCTFNh' 
apiSecretKey = 'xu2HNuzupwAp0V49Hk3p3RpkxDnuXDFez3TKCpsSeUJlwWnMMZ'

auth = tw.OAuthHandler(apiKey,apiSecretKey) 
auth.set_access_token(accessToken,accessTokenSecret) 
api = tw.API(auth,wait_on_rate_limit=True)

def cleaning(tweet):
	tweet = re.sub('@[\w]+','',tweet)
	tweetCleaned = re.sub(r"http\S+", "", tweet)
	tweetWithoutSpChars = re.sub(r'[^\w\s]','',tweetCleaned)
	return tweetWithoutSpChars

def readwords( filename ):
    f = open(filename)
    words = [ line.rstrip() for line in f.readlines()]
    return words

def toLowerCase(line):
  return line.lower()

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

def stemmingLines(line):  
  ps = PorterStemmer()
  output=[]
  for w in line:
    output.append(ps.stem(w))
  return output

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

def countWords(tweet):
	tweetList = tweet.split(" ")
	return(len(tweetList))

tweetDetails = [["Tweet", "Followees", "Followers", "No of posts", "Retweet count", "Favorite count", "Positive words", "Negative words", "No: of Words"]]

userID = 'AkshaySusanth'
 
tweets = api.user_timeline(screen_name=userID ,exclude_replies=True, include_rts=False, tweet_mode='extended')
for tweet in tweets:
    pos, neg = posNeg(tweet.full_text)
    countOfWords = countWords(tweet.full_text)
    cleanedTweet = cleaning(tweet.full_text)
    cleanedTweet = toLowerCase(cleanedTweet)
    cleanedTweet = stop_words(cleanedTweet)
    cleanedTweet = stemmingLines(cleanedTweet)
    tweetDetails.append([cleanedTweet, api.get_user(userID).friends_count, api.get_user(userID).followers_count, api.get_user(userID).statuses_count, tweet.retweet_count, tweet.favorite_count, pos, neg, countOfWords])

    with open("userTweets_test.csv", "w+") as file:
	    writer = csv.writer(file, delimiter=',')
	    writer.writerows(tweetDetails)

vectorizer = CountVectorizer()

datasetReader = pd.read_csv('./cleanedDataset.csv')
testDatasetReader = pd.read_csv('./userTweets_test.csv')

df = pd.DataFrame(datasetReader)
dft = pd.DataFrame(testDatasetReader)

allFeatures = vectorizer.fit_transform(datasetReader.Tweet)
testAllFeatures = vectorizer.transform(testDatasetReader.Tweet)

classifier = MultinomialNB()
classifier.fit(allFeatures, datasetReader.Depressed)


X = np.asarray(df[['Followees', 'Followers', 'No of posts', 'Retweet count', 'Favorite count', 'Positive words', 'Negative words', 'No: of Words']])
Y = np.asarray(df['Depressed'])
Xt = np.asarray(dft[['Followees', 'Followers', 'No of posts', 'Retweet count', 'Favorite count', 'Positive words', 'Negative words', 'No: of Words']])

classifier2 = MultinomialNB()
classifier2.fit(X, Y)

yPred2=classifier2.predict_proba(Xt) 

yPred1=classifier.predict_proba(testAllFeatures)

pos = []
weight = 0.1

# Logarithmic addition for combining probabilities
for i in range(len(yPred1)):
    res = [np.exp(np.log(yPred1[i][0]) + np.log(yPred2[i][0]+weight)),np.exp(np.log(yPred1[i][1]) + np.log(yPred2[i][1]+weight)),np.exp(np.log(yPred1[i][2]) + np.log(yPred2[i][2]+weight))]
    pos.append(res)

tally = []

# Adding the tally of resutls to a tally list

for i in pos:
    if i[0] > i[1]:
        if i[0] > i[2]:
            tally.append(0)
        else:
            tally.append(4)
    else:
        if i[1] > i[2]:
            tally.append(2)
        else:
            tally.append(4)

print(tally)
