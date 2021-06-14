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

datasetReader = pd.read_json('./cleanedDataset.json')

allFeatures = vectorizer.fit_transform(datasetReader.Tweet)
xTrain, xTest, yTrain, yTest = train_test_split(allFeatures, datasetReader.Depressed, test_size = 0.3, random_state = 88)

classifier = MultinomialNB()
classifier.fit(xTrain, yTrain)

visualizer = ROCAUC(classifier, encoder={0: 'Non Depressed', 2: 'Mildly Depressed', 4: 'Higly Depressed'})

visualizer.fit(xTrain, yTrain)    
visualizer.score(xTest, yTest)        
visualizer.show()    

yPred=classifier.predict(xTest)
accuracy = metrics.accuracy_score(yTest, yPred)
print("accuracy:   %0.3f" % accuracy)

print(metrics.classification_report(yTest, yPred, target_names=['ND', 'D', 'HD']))

print("Confusion Matrix:")
print(metrics.confusion_matrix(yTest, yPred))
