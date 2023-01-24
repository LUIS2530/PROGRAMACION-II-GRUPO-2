import { Router } from "express";
import {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
	createUser,
} from "../controllers/users.js";

const router = Router();

/**
 * @swagger
 * tags:
 *      name: Users
 *      description: Users routes
 */

/**
 * @swagger
 * /users:
 *  get:
 *      summary: Get all users
 *      tags: [Users]
 */
router.get("/users/", getUsers);


/**
 * @swagger
 * /users/:id:
 *  get:
 *      summary: Get a user by id
 *      tags: [Users]
 */
router.get("/users/:id", getUser);


/**
 * @swagger
 * /users:
 *  post:
 *      summary: Create a user
 *      tags: [Users]
 */
router.post("/users", createUser);


/**
 * @swagger
 * /users/:id:
 *  put:
 *      summary: Update a user by id
 *      tags: [Users]
 */
router.put("/users/:id", updateUser);


/**
 * @swagger
 * /users/:id:
 *  delete:
 *      summary: Delete a task by id
 *      tags: [Users]
 */
router.delete("/users/:id", deleteUser);

export default router;
