# Simmons Data Visualization

This web application is a survey taking and data visualization website where students complete a survey and can view their qualities, such as Creativity and Communication, displayed in a spider chart. Students can compare their results with other survey takers by adding dataset(s) by gender, race/ethnicity, and/or major. Students can also look at a bar chart which uses other students survey results on the activities that can improve specific qualities.

## Link
https://simmons-data-vis-2.herokuapp.com/

## Credit
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features Implemented

### Homepage
![alt test](client/src/img/homepage.png)

### Register/Login Page
![alt test](client/src/img/login_register.png)

### Dashboard
![alt test](client/src/img/dashboard.png)
  
#### Survey Page
![alt test](client/src/img/survey_1_1.png)
![alt test](client/src/img/survey_1_2.png)
  
#### Data Page
![alt test](client/src/img/data_1.png)
![alt test](client/src/img/data_2.png)
  
#### Admin Login Page
![alt test](client/src/img/adminlogin.png)
  
#### Admin Statistics Page
![alt test](client/src/img/adminstats.png)
  
## Run Project
Go into the develop branch 
```
    git checkout develop
```
and create two terminals. On one terminal,
```
    cd client && npm install && yarn start
```
A page should automatically open up with the application. If not, open your browser to localhost:3000.    
  
To start the server, on the other terminal input, 
```
    cd server && npm install && node server.js
```

## Update Database and Server Connections
To update database and server connections, if your project has a backend > config > config.js file locally, then change the following field to your desired database. 
```
    db: { 
        uri: ''
    } 
```
Otherwise you can manually input a database within the backend > config > express.js file on line 11 and change the following code
```
    process.env.MONGODB_URI || require('./config').db.uri
```