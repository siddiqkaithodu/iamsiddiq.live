from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import numpy as np

experience= np.array([2.4,5.0,1.5,3.8,8.7,3.6,1.2,8.1,2.5,5,1.6,1.6,2.4,3.9,5.4])
salary = np.array([2.1,4.7,1.7,3.6,8.7,3.2,1.0,8.0,2.4,6,1.1,1.3,2.4,3.9,4.8])
experience = experience.reshape(-1,1)

model = LinearRegression()
model.fit(experience,salary)

salary_pred = model.predict(experience)
Mse = mean_squared_error(salary, salary_pred)

print('slop', model.coef_)
print("Intercept", model.intercept_)
print("MSE", Mse)

import matplotlib.pyplot as plt
plt.scatter(experience,salary,color = 'red')
plt.xlabel("experience")
plt.ylabel("salary")
plt.show()
