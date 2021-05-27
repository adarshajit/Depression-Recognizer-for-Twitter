import pandas as pd
import numpy as np
import csv

from sklearn.metrics import recall_score, precision_score, f1_score
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from yellowbrick.classifier import ROCAUC
from sklearn import metrics


vectorizer = CountVectorizer()

datasetReader = pd.read_csv('./cleanedDataset.csv')
# testdatasetReader = pd.read_csv('./testDataset.csv') #manually copy pasted data of 0, 2, and 4 separately

df = pd.DataFrame(datasetReader)
# dt = pd.DataFrame(testdatasetReader)

allFeatures = vectorizer.fit_transform(datasetReader.Tweet)
# testFeatures = vectorizer.transform(testdatasetReader.Tweet)

xTrain, xTest, yTrain, yTest = train_test_split(allFeatures, datasetReader.Depressed, test_size = 0.3, random_state = 88)

classifier = MultinomialNB()
classifier.fit(xTrain, yTrain)

# visualizer = ROCAUC(classifier, encoder={0: 'Non Depressed', 2: 'Mildly Depressed', 4: 'Higly Depressed'})

# visualizer.fit(xTrain, yTrain)    
# visualizer.score(xTest, yTest)        
# visualizer.show()    

# print(xTest)

# print(test)

yPred1=classifier.predict_proba(xTest) # Probability values of classifier with tweet only


X = np.asarray(df[['Followees', 'Followers', 'No of posts', 'Retweet count', 'Favorite count', 'Positive words', 'Negative words', 'No: of Words']])
Y = np.asarray(df['Depressed'])

# test = np.asarray(dt[['Followees', 'Followers', 'No of posts', 'Retweet count', 'Favorite count', 'Positive words', 'Negative words', 'No: of Words']])

xTrain, xTest, yTrain, yTest = train_test_split(X, Y, test_size = 0.3, random_state = 88)

classifier2 = MultinomialNB()
classifier2.fit(xTrain, yTrain)

yPred2=classifier2.predict_proba(xTest) # Probability values of classifier with activities only

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

correct = 0

# Manually checking for TN and TP

for i,value in enumerate(yTest):
    if value == tally[i]:
        correct += 1

accuracy = correct/len(yTest)

print("Accuracy = ", accuracy)

# accuracy = metrics.accuracy_score(yTest, yPred)
# print("accuracy:   %0.3f" % accuracy)

# print(metrics.classification_report(yTest, yPred, target_names=['ND', 'D', 'HD']))

# print("Confusion Matrix:")
# print(metrics.confusion_matrix(yTest, yPred))
