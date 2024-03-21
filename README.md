Western University claims it has a ‘barrier-free’ campus however, members of the disabled student population have stated the campus is not as accessible as Western claims, as reported in the Western Gazette. 
Websites and tools offered by Western include gaps, are difficult to use, and often only available with a valid UWO account. 

Campus Accessibility (CA) is a tool that can help in areas where the other resources lack. 
This web application, open to all, allows users to anonymously report accessibility issues around Western’s campus. 
CA’s main feature is an interactive map that grants users the ability to view all reports for a Western building. Users can also view trends regarding report information. 
Lastly, a neural network trained on report data can be used to predict a potential building’s accessibility severity. We hope that Campus Accessibility can improve the student experience at Western University. 

Execution Steps
1. How to Create the Database:
- Using MySQL Workbench create a new connection
- Create a new schema called 'campusAccessibility'
- Find the "BuildingInformationTable.sql" and "ReportsTable.sql" files in the sql folder for the commands to create the necessary tables
- Populate the BuildingInfo table by running the "BuildingInfoInserts.sql" file
- Populate the Reports table with dummy data by running the "reportInserts.sql" file
- The database is now fully created and filled with the necessary data
  
2. How to Connect Database to Backend:
- Open up the code using your preferred IDE (ex.Visual Studio Code) and find the "server.js" file in the backend folder
- You will need to update lines 13-16 with the appropriate information to connect your database
  - host: "localhost"
  - user: "your username in MySQL workbench"
  - password: "your password in MySQL workbench"
  - database: "campusAccessibility"
- Save this file
  
3. How to Start Backend:
- Open a terminal and ensure you are in the CampusAccessibility project
- Type cd backend
- Type npm start
- This will start the backend
- To ensure the backend is working you can go to your browser and type "http://localhost:8081/" into the searchbar, Hello World should appear on the browser
  
4. How to Start Frontend:
- Open a new terminal and ensure you are in the CampusAccessibility project
- Type cd frontend
- Type npm start
- This will start the frontend, and the browser should open up to " http://localhost:3000/#/" showing the application 
