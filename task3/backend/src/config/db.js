const mysql =require("mysql2");
require("dotenv").config();

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:20,

})

connection.getConnection((err,conn)=>{
    if(err){
        console.log("Error connecting to mysql database");
        
        }
    else{
        console.log("Connected to mysql database");
        conn.release();
    }    
})

module.exports = connection;