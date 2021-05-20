import csv
import numpy as np
import pandas as pd

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import recall_score, precision_score, f1_score
from sklearn.metrics import precision_recall_fscore_support
from sklearn import metrics

vectorizer = CountVectorizer()

datasetReader = pd.read_csv('./cleanedDataset.csv')

df = pd.DataFrame(datasetReader)

allFeatures = vectorizer.fit_transform(datasetReader.Tweet)

X = np.asarray(df[['Followees', 'Followers', 'No of posts', 'Retweet count', 'Favorite count', 'Positive words', 'Negative words', 'No: of Words']])
Y = np.asarray(df['Depressed'])

xTrain, xTest, yTrain, yTest = train_test_split(X, Y, test_size = 0.3, random_state = 88)

classifier = MultinomialNB()
classifier.fit(xTrain, yTrain)

nr_correct = (yTest == classifier.predict(xTest)).sum()
nr_incorrect = yTest.size - nr_correct

precision, recall, fscore, support = precision_recall_fscore_support(yTest, classifier.predict(xTest), average=None, labels=[0,2,4])

print("Recall = ", recall, " Precision = ", precision, " & F1 Score = ", fscore)

yPred=classifier.predict(xTest)
accuracy = metrics.accuracy_score(yTest, yPred)
print("accuracy:   %0.3f" % accuracy)

print(metrics.classification_report(yTest, yPred, target_names=['ND', 'D', 'HD']))

print("Confusion Matrix:")
print(metrics.confusion_matrix(yTest, yPred))
