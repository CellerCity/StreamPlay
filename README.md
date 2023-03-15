Streamplay Website
This website is a video and game platform that allows users to watch videos and play games online.

Installation
To run the website locally, you will need to have the following installed:

Node.js
MongoDB
To install the project dependencies, run the following command:

> npm install

Usage
To start the server, run the following command:

> npm start

The server will run on http://localhost:3000.

Architecture and Design
This website is built using React, Node.js, Express, and MongoDB. The codebase is organized into the following directories:

src/components : This contains all the individual .jsx components used for building the website.
src/static : All the static resources like images, audio and static webpages including the game pages are stored here.
src/utils : This contains the file that is used for the fetching the API request to get the video and contains another file that maintains all the video
information like list of categories, list of icons,  etc., that are used in the main website.

The website includes the following features:

* User authentication and authorization
* Video Viewing
* Game playing

Features and Functionality:
* User Authentication and Authorization
* Users can sign up for an account and log in to access the video and game features. User passwords are hashed using bcrypt for security.

Video Viewing:
Videos can be viewed by all users on the website. Videos can be searched by title and category.

Game Playing:
The website includes a simple game that users can play. The game is built using JavaScript and Canvas.

