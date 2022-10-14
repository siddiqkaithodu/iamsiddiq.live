import pandas as pd
from sklearn.metrics import confusion_matrix
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC

data = pd.read_csv("apples_and_oranges.csv")
training_set, test_set = train_test_split(data, test_size=0.2,random_state=1)

X_train = training_set.iloc[:, 0:2].values
Y_train = training_set.iloc[:, 2].values

X_test = test_set.iloc[:, 0:2].values
Y_test = test_set.iloc[:, 2].values

print("Initial Test\n", test_set)

classifier = SVC(kernel='linear')
classifier.fit(X_train, Y_train)

Y_pred = classifier.predict(X_test)
test_set["Predictions"] = Y_pred

print("\nTest Set after Prediction\n\n", test_set)

cm = confusion_matrix(Y_test, Y_pred)

accuracy = float(cm.diagonal().sum())/len(Y_test)
print("\nAccuracy of SVM For The Given Dataset : ", accuracy)

