import { Router } from "express";
import {
  getSensor,
  getSensorTemperatura,
  getSensorHumedad,
  getSensorLuminocidad,
} from "../controllers/sensores.js";

const router = Router();


/**
 * @swagger
 * tags: 
 *      name: Sensors
 *      description: Sensors routes
 */

/**
 * @swagger
 * /sensores:
 *  get:
 *      summary: Get all sensors
 *      tags: [Sensors]
 */

router.get("/sensores/temperatura", getSensorTemperatura);

router.get("/sensores/humedad", getSensorHumedad);

router.get("/sensores/luminocidad", getSensorLuminocidad);

/**
 * @swagger
 * /sensores/:id:
 *  get:
 *      summary: Get a sensor by id
 *      tags: [Sensors]
 */
router.get("/sensores/:id", getSensor);



export default router;
