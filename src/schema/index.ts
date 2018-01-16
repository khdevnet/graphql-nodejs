import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import userQueries from './user/queries';
import categoryQueries from './category/queries';
import productQueries from './product/queries';


export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            ...userQueries,
            ...categoryQueries,
            ...productQueries
        }
    })
});