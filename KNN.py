import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier

data = pd.read_csv("apples_and_oranges.csv")
training_set, test_set = train_test_split(data, test_size=0.4)
X_train = training_set.iloc[:, 0:2].values
Y_train = training_set.iloc[:, 2].values
X_test = test_set.iloc[:, 0:2].values
Y_test = test_set.iloc[:, 2].values
print("Initial Test Set\n", test_set)
classifier = KNeighborsClassifier(n_neighbors=15)
classifier.fit(X_train, Y_train)
Y_pred = classifier.predict(X_test)
test_set["Predictions"] = Y_pred
print("\nTest Set after Prediction\n\n", test_set)
accuracy=classifier.score(X_test, Y_test)
print("\nAccuracy of KNN for the Given Dataset : ", accuracy)
