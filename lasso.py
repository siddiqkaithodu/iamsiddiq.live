from sklearn import datasets
from sklearn.linear_model import Lasso
from sklearn.model_selection import train_test_split
bh = datasets.load_boston()
X = bh.data
y = bh.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
lasso = Lasso(alpha=1.0)
lasso.fit(X_train, y_train)
print(lasso.score(X_test, y_test))
print(lasso.score(X_train, y_train))
