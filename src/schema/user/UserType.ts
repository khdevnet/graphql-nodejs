import { GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';
import { GraphQLID } from 'graphql/type/scalars';

export default new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
  },
});