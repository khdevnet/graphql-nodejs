import UserType from './UserType';

const me = {
  type: UserType,
  resolve() {
    return {
      name: 'anton',
      email: 'anton@gmail.com'
    };
  }
};

export default {
  me,
};