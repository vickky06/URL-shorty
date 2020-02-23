# URL-shorty
Overview
• URL shorty is a service that allows people to shorten the URL provided and allows any admin user to have access to visual chart representation of URLs shortened in between the provided time window.
• This application is not, by any stretch of the imagination, complete. All of the features will need to be revised several times before it is finalized. The graphics and layout of the screens is designed but needs to be created for the underlying functionality. The actual look and feel will be developed over time will increase with the input of graphics designers and iterative user feedback.
This spec does not discuss the algorithms used by the time calculation engine, which will be discussed elsewhere. It simply discusses what the user sees when they interact with URL Shorty.
Non Goals
• This version will NOT support any of the below features, however can be added into future versions.
i) Changing/Updating user credentials.
ii) VPN urls and redirected URLs.
KEY FEATURES:
•
• LOGIN - LOGOUT functionality for Admin.
• SIGN UP functionality for Admin.
• SESSION MANAGEMENT functionality to handle multiple sessions.
• Cache management for both client and server side.
2
Vivek Singh
Version :01
• Functionality to shorten URLs, with and without custom Tag.
• Data visualization into Graphical representation form for provided date window.
• Access or redirect shortened URL.
USAGE:
• A proper usage documentation has been provided independently and can be referred from there.
• In brief, the application has been deployed onto the Heroku server and can be accessed by POSTMAN application.
URLS extension and USAGE (APIs):
• General User
/shorten (POST) : (BODY){“longUrl” : “somrandomURLtoBE/shortened.123”}
i) generates and return a detail of newly shortened URL.
/custom/customUrl (POST) : (BODY) {"longUrl" :"someLongRandomURL" , "customTag" :"myTag"}
i) generates and return a detail of newly shortened URL with the provided custom Tag. 
{{shortened URL}} (GET) :
i) Redirects to a the actual URL page , provided the URL is valid and existing.
/signUp (POST) : (BODY)
{"name": "name" , "email": "name@mail.com","password": "mamama@456","age" :"000" }
i) Returns with successful sign up along with sign into the application, if data was valid
. / login (POST) : (BODY) {"email":"name@mail.com","password":"zxcvbn"}
i) Signs in the applicant for admin privelages.
/ timeSeriesPlot(POST) : (BODY) {"startTime" : "03-10-2017", "endTime" : "03-10-2020"}
3
Vivek Singh
Version :01
i) Returns a visual graphical representation of data under visualize. / logout (POST) : Logs OUT from all the sessions created.
