# GraphQL-backend

GraphQL Backend Project:-

Overview:-

This project is a GraphQL backend implementation using Node.js, Express.js, Apollo Server, and MongoDB. It provides API endpoints for creating and retrieving posts, user registration, and authentication using JWT tokens.

Features
GraphQL API:http://localhost:4001/graphql

Create, retrieve, and filter posts.
User registration and authentication.
JWT token generation and validation for user sessions.

Database Integration:-
MongoDB database for storing posts and user information.
Mongoose ODM for data modeling and interaction.

Middleware:-
Custom middleware for JWT authentication of requests.
Error handling for authentication failures and other exceptions.


Technologies Used:-
Node.js
Express.js
Apollo Server
GraphQL
MongoDB (with Mongoose)
JSON Web Tokens (JWT)
bcrypt for password hashing
dotenv for environment variables




When creating a README file to impress an interviewer or showcase your project, it's essential to provide clear and concise information about your project, its purpose, features, technologies used, and how to get started. Here's an example structure and content you can include in your README file:

GraphQL Backend Project
Overview
This project is a GraphQL backend implementation using Node.js, Express.js, Apollo Server, and MongoDB. It provides API endpoints for creating and retrieving posts, user registration, and authentication using JWT tokens.

Features
GraphQL API:

Create, retrieve, and filter posts.
User registration and authentication.
JWT token generation and validation for user sessions.
Database Integration:

MongoDB database for storing posts and user information.
Mongoose ODM for data modeling and interaction.
Middleware:

Custom middleware for JWT authentication of requests.
Error handling for authentication failures and other exceptions.
Technologies Used
Node.js
Express.js
Apollo Server
GraphQL
MongoDB (with Mongoose)
JSON Web Tokens (JWT)
bcrypt for password hashing
dotenv for environment variables
Getting Started
Clone the Repository:

sh
Copy code
git clone https://github.com/yourusername/your-repo.git
Install Dependencies:

sh
Copy code
cd your-repo
npm install
Set Environment Variables:
Create a .env file in the root directory with the following content:

plaintext
Copy code
MONGO_URI=mongodb://username:password@host:port/database
JWT_SECRET=YourSecretKeyHere
Run the Server:

sh
Copy code
npm start
Access the API:
The server will start on port 4001 by default. You can access the GraphQL Playground or send requests to http://localhost:4001/graphql to interact with the API.


Create Post Mutation:-

mutation {
  createPost(post: { title: "Sample Post", description: "This is a sample post." }) {
    id
    title
    description
  }
}



Get All Posts Query:-

query {
  getAllPosts {
    id
    title
    description
  }
}


Register User Mutation:-

mutation {
  registerUser(username: "testuser", email: "test@example.com", password: "securepassword") {
    id
    username
    email
  }
}


Login User Mutation:-

mutation {
  loginUser(email: "test@example.com", password: "securepassword") {
    userId
    token
    tokenExpiration
  }
}