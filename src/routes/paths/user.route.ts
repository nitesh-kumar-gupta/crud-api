import { getUsers, addUser, updateUser, deleteUser } from '../../controllers';
import { RouteInterface } from '../../interfaces';
import { reqDataValidate } from '../../libs/middlewares';
import {
  addUserSchema,
  getUserSchema,
  updateUserSchema,
  deleteUserSchema
} from '../../validation-schemas';

const userRoute: Array<RouteInterface> = [
  {
    type: 'GET',
    path: '/users/:userId?',
    handlers: [reqDataValidate(getUserSchema), getUsers]
  },
  {
    type: 'POST',
    path: '/users',
    handlers: [reqDataValidate(addUserSchema), addUser]
  },
  {
    type: 'PUT',
    path: '/users/:userId',
    handlers: [reqDataValidate(updateUserSchema), updateUser]
  },
  {
    type: 'DELETE',
    path: '/users/:userId',
    handlers: [reqDataValidate(deleteUserSchema), deleteUser]
  }
];

export default userRoute;

/**
 * @swagger
 * tags:
 *   name: User
 *   description: API for handling users
 * /api/users:
 *   get:
 *     summary: List all users
 *     tags: [List users]
 *     responses:
 *       201:
 *         description: List of users
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 *   post:
 *     summary: Create a new user
 *     tags: [Create user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request - Missing or invalid fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Username is required.'
 * /api/users/{userId}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Retrieve user]
 *     parameters:
 *       - $ref: '#/components/parameters/UserId'
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request - Invalid userId
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Invalid userId. Must be a valid UUID.'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'We could not find the user with id as ${userId} you requested.'
 *   put:
 *     summary: Update user by ID
 *     tags: [Update user]
 *     parameters:
 *       - $ref: '#/components/parameters/UserId'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request - Invalid userId or missing fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Invalid userId. Must be a valid UUID.'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'We could not find the user with id as ${userId} you requested to update.'
 *   delete:
 *     summary: Delete user by ID
 *     tags: [Delete user]
 *     parameters:
 *       - $ref: '#/components/parameters/UserId'
 *     responses:
 *       204:
 *         description: User deleted successfully
 *       400:
 *         description: Bad request - Invalid userId
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: 'Invalid userId. Must be a valid UUID.'
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: 'We could not find the user with id as ${userId} you requested to delete.'
 */
