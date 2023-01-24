import {pool} from "../db.js"

// users tasks
export const getActuator = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM ACTUADOR_INFO WHERE ACTUADORES_idACTUADORES = ? ORDER BY FECHA DESC", [
        req.params.id]);
    res.json(rows)
}

export const getActuatorsFoco = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM ACTUADOR_INFO WHERE ACTUADORES_idACTUADORES = 1 ORDER BY FECHA DESC LIMIT 1")
    console.log(rows)
    res.json(rows[0])
}

export const getActuatorsBomba = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM ACTUADOR_INFO WHERE ACTUADORES_idACTUADORES = 2 ORDER BY FECHA DESC LIMIT 1")
    console.log(rows)
    res.json(rows[0])
}

export const getActuatorsVentilador = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM ACTUADOR_INFO WHERE ACTUADORES_idACTUADORES = 3 ORDER BY FECHA DESC LIMIT 1")
    console.log(rows)
    res.json(rows[0])
}

export const createActuators = async (req, res) => {
    const [results] = await pool.query
        ("INSERT INTO ACTUADOR_INFO (FECHA, ACTUADORES_idACTUADORES, DATO) VALUES (?,?,?)", [
            req.body.FECHA, 
            req.body.idACTUADORES,
            req.body.DATO])
    res.json({
        id: results.insertId,
        ...req.body
        })
}


