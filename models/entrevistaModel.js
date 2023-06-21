const pool = require ('./bd');

async function getEntrevistas(){
    var query = 'select * from entrevistas'
    var rows = await pool.query(query);
    return rows;
}

async function deleteEntrevistasById(id) {
    var query = 'delete from entrevistas where id = ?';
    var rows = await pool.query(query, [id]);
    return rows
}

async function insertEntrevistas(obj){
    try{
        var query = "insert into entrevistas set ?";
        var rows = await pool.query(query, [obj])
        return rows;

    } catch (error){
        console.log (error);
        throw error;
    }
}

module.exports = {getEntrevistas, deleteEntrevistasById, insertEntrevistas}