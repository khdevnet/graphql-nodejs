import { GraphQLList, GraphQLString } from 'graphql';

import ProductType from './ProductType';

const products = {
  type: new GraphQLList(ProductType),
  args: {
    id: { type: GraphQLString }
  },
  async resolve(_: any, args: any) {
    const { id } = args;
    const data = [{
      id: '123',
      sku: '123',
      price: 123,
      count: 123,
      name: 'Mens',
      description: 'Mens description'
    },
    {
      id: '124',
      sku: '123',
      price: 123,
      count: 123,
      name: 'Mens',
      description: 'Mens description'
    }];

    if (id) {
      return data.filter(u => u.id == id);
    }

    return data;
  }
};

export default {
  products
};