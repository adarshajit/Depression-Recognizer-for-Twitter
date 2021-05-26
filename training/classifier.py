import csv
import numpy as np
import pandas as pd

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB

vectorizer = CountVectorizer()

datasetReader = pd.read_csv('./cleanedDataset.csv')

df = pd.DataFrame(datasetReader)

allFeatures = vectorizer.fit_transform(datasetReader.Tweet)

X = np.asarray(df[['Followees', 'Followers', 'No of posts', 'Retweet count', 'Favorite count', 'Positive words', 'Negative words', 'No: of Words']])
Y = datasetReader.Depressed

#UserActivity model
xTrain, xTest, yTrain, yTest = train_test_split(X, Y, test_size = 0.3, random_state = 88)
classifier = MultinomialNB()
classifier.fit(xTrain, yTrain)

#DTM_Model
xTrain1, xTest1, yTrain1, yTest1 = train_test_split(allFeatures, Y, test_size = 0.3, random_state = 88)
classifier1 = MultinomialNB()
classifier1.fit(xTrain1, yTrain1)

xsample = [xTest[0]] #Taking first sample of test dataset
yProb=classifier.predict_proba(xsample) #Predicting probability of the first sample of test dataset

print('Predicted Probabilities: ', yProb)

#Normal prediction
y_class = classifier.predict(xsample)
y_class1 = classifier1.predict(xTest1)

#Printing predicted class
print('Predicted Class: ', y_class)
print('Predicted Class1: ', y_class1[0])

#Finding the index number to find which class has highest probability
max_index_col = np.argmax(yProb[0], axis=0)
print(max_index_col)