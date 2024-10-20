const { gql } = require('apollo-server');
const typeDefs = gql `
type Project {
_id: ID!
name: String!
description: String!
startDate: String!
endDate: String!
status: Boolean!
budget: Int!
}

type Query{
    projects:[Project]!
}

type Mutation{
    createProject(name:String!, description:String!, startDate:String!,endDate:String!,status:Boolean!,budget:Int!): Project!
    updateProject(_id: ID!, statu:Boolean!):Project!
    deleteProject(_id:ID!):Project!
}
`;

module.exports = typeDefs;