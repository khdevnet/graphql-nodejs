import { GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';
import { GraphQLID } from 'graphql/type/scalars';

export default new GraphQLObjectType({
  name: 'Category',
  fields: {
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    }
  }
});