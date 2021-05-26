import csv
import numpy as np
import pandas as pd

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import recall_score, precision_score, f1_score
from sklearn.metrics import precision_recall_fscore_support
from sklearn import metrics
from sklearn.metrics import roc_curve, roc_auc_score
import matplotlib.pyplot as plt
from yellowbrick.classifier import ROCAUC

vectorizer = CountVectorizer()

datasetReader = pd.read_csv('./smallDataset.csv')

df = pd.DataFrame(datasetReader)

allFeatures = vectorizer.fit_transform(datasetReader.Tweet)

A=allFeatures.toarray()

X = np.asarray(df[['Followees', 'Followers', 'No of posts', 'Retweet count', 'Favorite count', 'Positive words', 'Negative words', 'No: of Words']])


X=np.array(X)
A=np.array(A)

allFeatures = np.hstack((A,X))

Y=datasetReader.Depressed
xTrain, xTest, yTrain, yTest = train_test_split(allFeatures, Y, test_size = 0.3, random_state = 88)

classifier = MultinomialNB()
classifier.fit(xTrain, yTrain)

yPred=classifier.predict(xTest)
accuracy = metrics.accuracy_score(yTest, yPred)


print("accuracy:   %0.3f" % accuracy)



print("Confusion Matrix:")
print(metrics.confusion_matrix(yTest, yPred))

