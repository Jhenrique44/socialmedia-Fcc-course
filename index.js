const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const Post = require('./models/Post');
const { MONGODB } = require('./config.js');

const typeDefs = gql`
    type Post {
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }
    type Query{
        getPosts: [Post]
    }
`;

const resolvers = {
    Query: {
        async getPosts (){
           try {
               const posts = await Post.find();
               return posts;
           } catch (error) {
               throw new Error(error);
           }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});
// wrYhNS7pUggYrnPu
mongoose.connect(MONGODB, { useNewUrlParser: true})
    .then(()=> {
        console.log('mongoDB Connected');
        return server.listen({port: 3000})
    })
    .then((res) => {
        console.log(`Server running at : ${res.url}`);
});
