const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('../src/schemas/projectSchema');
const resolvers = require('../src/resolvers/projectResolver');

const startServer = async () => {
    await mongoose.connect('mongodb+srv://naanestrellaro:Nancy130@project.uozda.mongodb.net/?retryWrites=true&w=majority&appName=project');
    const server = new 
    ApolloServer({ typeDefs, resolvers });

    server.listen().then(({url}) => {
        console.log(`Servidor corriendo en ${url}`);
    });
};

startServer();