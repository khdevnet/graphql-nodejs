import CategoryType from './CategoryType';
import { GraphQLList, GraphQLString } from 'graphql';

const categories = {
  type: new GraphQLList(CategoryType),
  args: {
    id: { type: GraphQLString }
  },
  async resolve(_: any, args: any) {
    const { id } = args;
    const data = [{
      id: '123',
      name: 'Mens',
      description: 'Mens description'
    },
    {
      id: '124',
      name: 'Womens',
      description: 'Womens description'
    }];

    if (id) {
      return data.filter(u => u.id == id);
    }

    return data;
  }
};

export default {
  categories
};