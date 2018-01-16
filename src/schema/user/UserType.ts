import { GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'User',
  fields: {
    name: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
  },
});