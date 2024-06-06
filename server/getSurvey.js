const mysql = require('mysql2/promise')
const pool = require('./dbpool')

async function query(sql, params){
    const [results,] = await pool.execute
}