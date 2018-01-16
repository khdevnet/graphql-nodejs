import { GraphQLObjectType, GraphQLString } from 'graphql';
import { GraphQLFloat, GraphQLInt } from 'graphql/type/scalars';

export default new GraphQLObjectType({
  name: 'Product',
  fields: {
    id: {
      type: GraphQLString
    },
    sku: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    price: {
      type: GraphQLFloat
    },
    description: {
      type: GraphQLString
    },
    count: {
      type: GraphQLInt
    }
  }
});