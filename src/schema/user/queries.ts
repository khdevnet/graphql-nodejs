import UserType from './UserType';
import { GraphQLList } from 'graphql';

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
  async resolve() {
    return [{
      id: '123',
      name: 'anton',
      email: 'anton@gmail.com'
    },
    {
      id: '124',
      name: 'andrey',
      email: 'andrey@gmail.com'
    }];
  }
};

export default {
  me,
  users
};