import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import userQueries from './user/queries';

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            ...userQueries,
        }
    })
});