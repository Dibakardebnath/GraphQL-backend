const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolver = require('./resolver');
const mongoose = require('mongoose');
const Middleware=require('./Middleware');
const dotenv=require("dotenv");

async function startServer() {
  const app = express();
  dotenv.config();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolver,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app: app });
  app.use(Middleware); 


  app.use((req, res) => {
    res.send('Hello from express apollo server');
  });

  await mongoose.connect(`${process.env.MONGO_URI}/post_db`, {
    useUnifiedTopology: true, // Corrected option name
    useNewUrlParser: true,
  });
  console.log('Mongoose connection established');
  
  app.listen(4001, () => console.log('Server is running'));
}

startServer();

