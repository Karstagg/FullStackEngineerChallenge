# PayPay Coding Challenge

### Current Status
Currently only part of the admin flow has been implemented.

The following features have been implemented:
* Sign up and sign in / sign out
* Admin view
    * form to add users to the app
    * displays added users on cards
* Admin User view
    * form to add reviews for user
    * displays added reviews in cards
* API methods via express on cloud functions
    * create users
    * get all users
    * create review
    * get reviews for user
    
### How to Run
There is nothing that needs to be run.
Please visit [the live demo](https://employee-reviewer-f9da9.web.app) to see the app in action.

You can run the react application on local host with yarn start or npm run start, but without the firebase credentials you will not be able to access the database.

### Assumtions

##### Scope

* This is a full-stack application project
    * it will require a database
    * it will require some backend code to interface with the database
    * it will require a frontend
* The project should be functional, efficient, and well coded, attractive, but as simple as possible
* No backend language or framework has been specified
* A modern JavaScript framework should be used on the frontend
* It could be acceptable to leverage cloud architecture instead of building a traditional server

##### Requirements (MVP)

* This application will need to provide differing levels of access based on user roles
    * In a real world scenario this app would need authentication
        * Only registered admins and other employees should be allowed to view performance reviews
    * In a real world scenario this app would need authorization
        * Only admins and employees who have been assigned to give a review should be able to see that performance review
        * As there is only a requirement to view reviews in need of feedback, and submit feedback,  I will assume that employees need not see other employees' feedback and that only admins should see this
* This application will require a database
    * The database will require the following 
        * employees
            * email: String
            * name: String
            * isAdmin: Boolean
        * review
            * id: UUID
            * reviewed_user_id: UUID
        * feedback
            * review_id
            * reviewer_id
            * reviewed_user_id
* A real life application of this nature would require the following pages
    * A login page
        * This will be a simple login page that will re-direct the user to the appropriate page given their role
    * An admin landing page
        * This page will only be visible to admins
        * This page will contain the following:
            * a component that lists available users
            * a filter to search users
            * a form allows the admin to add/delete/edit users
    * A basic view for each user
        * This view will be visible to admins
        * This view will contain the following:
            * User information
            * A list of Performance reviews for the user
            * A form that allows the admin to add a review
    * A basic view for each review
        * This view will be visible to admins
        * this view will contain the following:
            * Information about the review
            * An interface to request feedback on the review from other users
            * a list of feedback items
    * An employee landing page
        * this page will be visible to normal employees and will contain a list of requested reviews
    * A feedback form page
        * this will contain a form to submit feedback
        
##### Not Required for (MVP)
* User Profiles
* Detail views for feedback
* The ability to review and edit previously submitted reviews
* The ability for users to view their performance review
* Detailed performance reviews (Not enough information to know what would be needed other than feedback)
* 2 factor auth
* signup confirmation

##### Not Required but nice to have if time allows 
* deploy to web - decided to deploy because it was minimal effort
* signup/login with OAuth providers


### Project Overview
#### Technology
    Backend:
        Datbase:
            Firestore
        Auth:
            Firebase Auth
        API:
            Firebase Cloud Functions (TypeScript)
I chose this backend technology stack because I am familiar with it and it is excellent for rapid prototyping.
                   
****                                      
    Frontend: 
        Framework:
            React - basic react app with create-react-app
        Language:
            TypeScript
        Styling:
            Styled Components
        REST:
            Axios
I chose this frontend technology stack because I am familiar with it and trust it to work well.
****
        
#### Design
    Color Scheme:
        Main:
        Alt:
        Highlight:
    Style: Neumorphic
    grid: CSS Grid
    Component Types:
        Cards
        Buttons
        Inputs
This is a generic Design pattern meant to take a minimal amount of time with minimal time spent designing layouts.
        
                
        


