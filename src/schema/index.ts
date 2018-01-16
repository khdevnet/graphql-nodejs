import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import userQueries from './user/queries';
import categoryQueries from './category/queries';


export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            ...userQueries,
            ...categoryQueries,
        }
    })
});