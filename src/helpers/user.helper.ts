import { users } from '../database';

const UserHelper = {
  getUser: (id: string) => {
    return users.find((user) => user.id === id);
  },
  getAllUser: () => {
    return users;
  }
};

export default UserHelper;
