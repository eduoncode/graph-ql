import { ApolloServer, gql } from 'apollo-server';

const port = process.env.PORT || 4003;
const config = {
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      username: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: '123312312-552982389-1332114',
          username: 'testuser',
        };
      },
      users: () => {
        return [
          {
            id: '123312312-552982389-1332114',
            username: 'testuser',
          },
          {
            id: '123312312-552982389-1332115',
            username: 'testuser2',
          },
          {
            id: '123312312-552982389-1332115',
            username: 'testuser3',
          },
        ];
      },
    },
  },
};

const server = new ApolloServer(config);
server.listen(port).then(({ url }) => {
  console.log(`GraphQL Playground is available at ${url}`);
});
