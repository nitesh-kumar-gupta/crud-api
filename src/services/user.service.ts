import { v4 } from 'uuid';
import { users } from '../database';
import { UserInterface } from '../interfaces';

class UserService {
  addUser(user: UserInterface) {
    user.id = v4();
    users.push(user);
    return user;
  }
  updateUser(userId: string, user: UserInterface) {
    const index = users.findIndex((obj) => obj.id === userId);
    users[index] = { ...users[index], ...user };
    return users[index];
  }
  deleteUser(userId: string) {
    const index = users.findIndex((obj) => obj.id === userId);
    users.splice(index, 1);
    return users;
  }
}
export default UserService;
