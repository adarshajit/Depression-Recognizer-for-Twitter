import csv
import re
import nltk.tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer

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

def stemmingLines(line):  
  ps = PorterStemmer()  
  #words = tokenize(line)
  output=[]
  for w in line:
    output.append(ps.stem(w))
  return output
  
def toLowerCase(line):
  return line.lower()


cleanedDataset = []
tweetCount = 0

with open("entireDataset.csv", newline='') as dataset: # file 1
    datasetReader = csv.reader(dataset, delimiter=',')
    for row in datasetReader:
        row[0] = cleaning(row[0])
        row[0] = toLowerCase(row[0])
        row[0] = stop_words(row[0])
        row[0] = stemmingLines(row[0])
        cleanedDataset.append(row)
        tweetCount += 1
        print(tweetCount, end="\r")
            
with open("cleanedDataset.csv", "w+") as file:
    writer = csv.writer(file, delimiter = ",")
    writer.writerows(cleanedDataset)
