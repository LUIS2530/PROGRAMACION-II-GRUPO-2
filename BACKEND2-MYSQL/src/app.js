import express from 'express';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import {options} from "./swaggerOptions.js"
import morgan from "morgan";

import usersRoutes from "./routes/users.js";
import sensoresRoutes from "./routes/sensores.js"
import actuatorsRoutes from "./routes/actuators.js"
import plantsRoutes from "./routes/plants.js"
import paramColorsRoutes from "./routes/paramColors.js"

// settings
const app = express();
const specs = swaggerJSDoc(options)
app.use(express.json());
app.use(morgan("dev"))
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs))


// routes
app.get("/", (req, res) => {
    try{res.send("Welcome to Server!")
    }catch(err){return res.status(404).json({message: err})}})

app.use(usersRoutes);
app.use(sensoresRoutes);
app.use(actuatorsRoutes);
app.use(plantsRoutes);
app.use(paramColorsRoutes);

export default app