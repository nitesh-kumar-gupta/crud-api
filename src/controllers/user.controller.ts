import { Request, Response } from 'express';
import { APIsuccess, handleError } from '../utils';
import { successResponse } from '../libs/responses';
import { SUCCESS_CONSTANT } from '../constants';
import { UserHelper } from '../helpers';
import ERROR_CONSTANT from '../constants/error.constant';
import { UserService } from '../services';
import { UserInterface } from '../interfaces';

const getUsers = (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    if (userId) {
      const data = UserHelper.getUser(userId);
      if (!data)
        throw {
          ...ERROR_CONSTANT.NOT_FOUND,
          message: `We could not find the user with id as ${userId} you requested.`
        };
      return successResponse(res, new APIsuccess(SUCCESS_CONSTANT.OK, data));
    }
    const data = UserHelper.getAllUser();
    successResponse(res, new APIsuccess(SUCCESS_CONSTANT.OK, data));
  } catch (error: unknown) {
    handleError(error, res);
  }
};
const addUser = (req: Request, res: Response) => {
  try {
    const { username, age, hobbies }: UserInterface = req.body;
    const userService = new UserService();
    const user = userService.addUser({ username, age, hobbies });
    successResponse(res, new APIsuccess(SUCCESS_CONSTANT.CREATED, user));
  } catch (error: unknown) {
    handleError(error, res);
  }
};
const updateUser = (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const data = UserHelper.getUser(userId);
    if (!data)
      throw {
        ...ERROR_CONSTANT.NOT_FOUND,
        message: `We could not find the user with id as ${userId} you requested to update.`
      };
    const { username, age, hobbies }: UserInterface = req.body;
    const userService = new UserService();
    const user = userService.updateUser(userId, {
      username,
      age,
      hobbies
    });
    successResponse(res, new APIsuccess(SUCCESS_CONSTANT.OK, user));
  } catch (error: unknown) {
    handleError(error, res);
  }
};
const deleteUser = (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const data = UserHelper.getUser(userId);
    if (!data)
      throw {
        ...ERROR_CONSTANT.NOT_FOUND,
        message: `We could not find the user with id as ${userId} you requested to delete.`
      };
    const userService = new UserService();
    userService.deleteUser(userId);
    successResponse(res, new APIsuccess(SUCCESS_CONSTANT.NO_CONTENT, {}));
  } catch (error: unknown) {
    handleError(error, res);
  }
};
export { getUsers, addUser, updateUser, deleteUser };
