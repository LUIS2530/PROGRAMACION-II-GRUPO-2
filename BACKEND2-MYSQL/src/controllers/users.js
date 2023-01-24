import {pool} from "../db.js"


export const getUsers = async (req, res) => {
    try {
    const [rows] = await pool.query("SELECT * FROM USUARIOS")
    console.log(req.get('host'))  // devuelve localhost:300
    console.log(`${req.protocol}//${req.headers.host}${req.url}`)  // devuelve http
    //console.log(rows)
    res.json(rows)
    } catch (err) {
        return res.status(404).json({message: "Something goes wrong"});
    }
}

export const getUser = async (req, res) => {
    try{
    const [rows] = await pool.query("SELECT * FROM USUARIOS WHERE idUSUARIOS = ?", [
        req.params.id]);
    console.log(req.url)
    res.json(rows[0])
    } catch (err) {
        return res.status(404).json({message: "Something goes wrong"});
    }
}

export const createUser = async (req, res) => {
    try{
        const [results] = await pool.query
        ("INSERT INTO USUARIOS(EMAIL, E_PASSWORD, NAME, SURNAME, PHONE) VALUES (?,?,?,?,?)", [
            req.body.EMAIL, 
            req.body.E_PASSWORD,
            req.body.NAME,
            req.body.SURNAME,
            req.body.PHONE])
        console.log(`${req.protocol}//${req.headers.host}${req.url}`)  // devuelve http
        res.json({
            id: results.insertId,
            ...req.body
            })
        //window.location.reload();
    }catch (err) {
        return res.status(404).json({message: "Something goes wrong"});
    }
}

export const updateUser = async (req, res) => {
    try{
        const [result] = await pool.query("UPDATE USUARIOS SET ? WHERE idUSUARIOS = ?", [
            req.body,
            req.params.id
        ])
        console.log(result)

        if (result.affectedRows === 0) {
            return res.status(400).json({
                message: "User not found"})
        }
        
        const [rows] = await pool.query("SELECT * FROM USUARIOS WHERE idUSUARIOS = ?", 
        [req.params.id])

        res.json(rows[0])
        //res.redirect('http://google.com')
    } catch (err){
        return res.status(404).json({message: "Something goes wrong"});
    }
    
}

export const deleteUser = async (req, res) => {
    try{
        const [result] = await pool.query("DELETE FROM USUARIOS WHERE idUSUARIOS = ?", [req.params.id])
        if (result.affectedRows === 0) {
            return res.status(400).json({
                message: "User not found"})
        }
        res.sendStatus(204);
    } catch (err) {
        return res.status(404).json({message: "Something goes wrong"});
    }
}