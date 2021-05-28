import tweepy as tw
import csv
import re
from tweepy.auth import OAuthHandler
import nltk.tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer

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

tweetDetails = [["Tweet", "Followees", "Followers", "No of posts", "Retweet count", "Favorite count", "Positive words", "Negative words", "No: of Words"]]
userName = 'AlanLoovees'



tweets = api.user_timeline(user_id='AdarshAjit',exclude_replies=True, include_rts=False)
for t in tweets:
    print(cleaning(t.text))