import pandas as pd
import numpy as np
import csv

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn import metrics

vectorizer = CountVectorizer()

datasetReader = pd.read_csv('./cleanedDataset.csv')

df = pd.DataFrame(datasetReader)

allFeatures = vectorizer.fit_transform(datasetReader.Tweet)

xTrain, xTest, yTrain, yTest = train_test_split(allFeatures, datasetReader.Depressed, test_size = 0.3, random_state = 88)

classifier = MultinomialNB()
classifier.fit(xTrain, yTrain)

yPred1=classifier.predict_proba(xTest) 

X = np.asarray(df[['Followees', 'Followers', 'No of posts', 'Retweet count', 'Favorite count', 'Positive words', 'Negative words', 'No: of Words']])
Y = np.asarray(df['Depressed'])

xTrain, xTest, yTrain, yTest = train_test_split(X, Y, test_size = 0.3, random_state = 88)

classifier2 = MultinomialNB()
classifier2.fit(xTrain, yTrain)

yPred2=classifier2.predict_proba(xTest) 

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

print(metrics.classification_report(yTest, tally, target_names=['Not Depressed', 'Mildy Depressed', 'HighlyDepressed']))

print("Confusion Matrix:")
print(metrics.confusion_matrix(yTest, tally))

accuracy = metrics.accuracy_score(yTest, tally)
    
print("Accuracy = ", accuracy*100,"%")