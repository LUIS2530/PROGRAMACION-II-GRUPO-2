import { Router } from "express";
import {
  getPlants,
  getPlant,
  deletePlants,
  updatePlants,
  createPlants,
} from "../controllers/plants.js";

const router = Router();


/**
 * @swagger
 * tags: 
 *      name: Plants
 *      description: Plants routes
 */

/**
 * @swagger
 * /plantas:
 *  get:
 *      summary: Get all plants
 *      tags: [Plants]
 */
router.get("/plantas/", getPlants);


/**
 * @swagger
 * /plantas/:id:
 *  get:
 *      summary: Get a plant by id
 *      tags: [Plants]
 */
router.get("/plantas/:id", getPlant);


/**
 * @swagger
 * /plantas:
 *  post:
 *      summary: Create a plant
 *      tags: [Plants]
 */
router.post("/plantas", createPlants);


/**
 * @swagger
 * /plantas/:id:
 *  put:
 *      summary: Update a plant by id
 *      tags: [Plants]
 */
router.put("/plantas/:id", updatePlants);


/**
 * @swagger
 * /plantas/:id:
 *  delete:
 *      summary: Delete a plant by id
 *      tags: [Plants]
 */
router.delete("/plantas/:id", deletePlants);

export default router;
