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