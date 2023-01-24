import {pool} from "../db.js"


export const getPlants = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM PLANTAS")
    console.log(rows)
    res.json(rows)
}

export const getPlant = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM PLANTAS WHERE idPLANTAS = ?", [
        req.params.id]);
    res.json(rows[0])
}

export const createPlants = async (req, res) => {
    const [results] = await pool.query
        ("INSERT INTO PLANTAS(NUM_PLANTAS, PLANTS_TYPE) VALUES (?,?)", [
            req.body.NUM_PLANTAS, 
            req.body.PLANTS_TYPE])
    res.json({
        id: results.insertId,
        ...req.body
        })
}

export const updatePlants = async (req, res) => {
    const results = await pool.query("UPDATE PLANTAS SET ? WHERE idPLANTAS = ?", [
        req.body,
        req.params.id
    ])
    console.log(results)
    res.sendStatus(204);
}


export const deletePlants = async (req, res) => {
    await pool.query("DELETE FROM PLANTAS WHERE idPLANTAS = ?", [req.params.id])
    res.sendStatus(204);
}