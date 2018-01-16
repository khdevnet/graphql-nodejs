import UserType from './UserType';
import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';

const me = {
  type: UserType,
  resolve() {
    return {
      id: '124',
      name: 'anton',
      email: 'anton@gmail.com'
    };
  }
};

const users = {
  type: new GraphQLList(UserType),
  args: {
    id: { type: GraphQLString }
  },
  async resolve(_: any, args: any) {
    const { id } = args;
    const data = [{
      id: '123',
      name: 'anton',
      email: 'anton@gmail.com'
    },
    {
      id: '124',
      name: 'andrey',
      email: 'andrey@gmail.com'
    }];

    if (id) {
      return data.filter(u => u.id == id);
    }

    return data;
  }
};

export default {
  me,
  users
};