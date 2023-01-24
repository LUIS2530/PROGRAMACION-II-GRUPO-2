import { Router } from "express";
import {
  getParamColors,
  getParamColor,
  deleteParamColors,
  updateParamColors,
  createParamColors,
} from "../controllers/paramColors.js";

const router = Router();


/**
 * @swagger
 * tags: 
 *      name: Color Parameter
 *      description: Color parameter routes
 */

/**
 * @swagger
 * /paramColors:
 *  get:
 *      summary: Get all paramColors
 *      tags: [Color Parameter]
 */
router.get("/paramColors/", getParamColors);


/**
 * @swagger
 * /paramColors/:id:
 *  get:
 *      summary: Get a paramColor by id
 *      tags: [Color Parameter]
 */
router.get("/paramColors/:id", getParamColor);


/**
 * @swagger
 * /paramColors:
 *  post:
 *      summary: Create a paramColor
 *      tags: [Color Parameter]
 */
router.post("/paramColors", createParamColors);


/**
 * @swagger
 * /paramColors/:id:
 *  put:
 *      summary: Update a paramColor by id
 *      tags: [Color Parameter]
 */
router.put("/paramColors/:id", updateParamColors);


/**
 * @swagger
 * /paramColors/:id:
 *  delete:
 *      summary: Delete a paramColor by id
 *      tags: [Color Parameter]
 */
router.delete("/paramColors/:id", deleteParamColors);

export default router;
