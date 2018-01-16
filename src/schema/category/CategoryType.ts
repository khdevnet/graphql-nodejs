import { GraphQLObjectType, GraphQLString } from 'graphql';
import productQueries from '../product/queries';

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
    },
    ...productQueries
  }
});