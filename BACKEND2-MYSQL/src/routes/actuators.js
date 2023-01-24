import { Router } from "express";
import {
  getActuator,
  createActuators,
  getActuatorsFoco,
  getActuatorsBomba,
  getActuatorsVentilador,
} from "../controllers/actuators.js";

const router = Router();


/**
 * @swagger
 * tags: 
 *      name: Actuators
 *      description: Actuators routes
 */

/**
 * @swagger
 * /actuadores:
 *  get:
 *      summary: Get foco
 *      tags: [Actuators]
 */
router.get("/actuadores/foco", getActuatorsFoco);



/**
 * @swagger
 * /actuadores:
 *  get:
 *      summary: Get bomba
 *      tags: [Actuators]
 */
router.get("/actuadores/bomba", getActuatorsBomba);



/**
 * @swagger
 * /actuadores:
 *  get:
 *      summary: Get ventilador
 *      tags: [Actuators]
 */
router.get("/actuadores/ventilador", getActuatorsVentilador);

/**
 * @swagger
 * /actuadores/:id:
 *  get:
 *      summary: Get an actuator by id
 *      tags: [Actuators]
 */
router.get("/actuadores/:id", getActuator);


/**
 * @swagger
 * /actuadores:
 *  post:
 *      summary: Create an actuator
 *      tags: [Actuators]
 */
router.post("/actuadores", createActuators);




export default router;
