import {pool} from "../db.js"


export const getParamColors = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM PARAMETRO_COLORES")
    console.log(rows)
    res.json(rows)
}

export const getParamColor = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM PARAMETRO_COLORES WHERE idPARAMETRO_COLORES = ?", [
        req.params.id]);
    res.json(rows[0])
}

export const createParamColors = async (req, res) => {
    const [results] = await pool.query
        ("INSERT INTO PARAMETRO_COLORES(VS_MIN, VS_MAX, VP_MIN, VP_MAX, ESTADO_PLANTA) VALUES (?,?,?,?,?)", [
            req.body.VS_MIN, 
            req.body.VS_MAX,
            req.body.VP_MIN,
            req.body.VP_MAX,
            req.body.ESTADO_PLANTA])
    res.json({
        id: results.insertId,
        ...req.body
        })
}

export const updateParamColors = async (req, res) => {
    const results = await pool.query("UPDATE PARAMETRO_COLORES SET ? WHERE idPARAMETRO_COLORES = ?", [
        req.body,
        req.params.id
    ])
    console.log(results)
    res.sendStatus(204);
}


export const deleteParamColors = async (req, res) => {
    await pool.query("DELETE FROM PARAMETRO_COLORES WHERE idPARAMETRO_COLORES = ?", [req.params.id])
    res.sendStatus(204);
}