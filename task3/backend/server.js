const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
const db = require('./src/config/db');
const PORT = process.env.PORT || 8080;
 
app.use(bodyParser.json());
app.use(cors()); 

app.get("/", (req, res) => {    
  res.send("Hello World!"); 
  console.log(req.body);
  
});

app.post("/add-data",(req,res)=>{
    const {subject1, subject2, subject3, subject4, subject5}=req.body;
  
    const query = `INSERT INTO  mark(Subject1,Subject2,Subject3,Subject4,Subject5)
                    VALUES(?,?,?,?,?)`
    
    db.query(query, [subject1, subject2, subject3, subject4, subject5], (err)=>{
  
      if(err){
        console.log(err);
        return res.status(500).json({error:"Failed to add marks"});
      }
      res.status(200).json({message:"Marks inserted successfully"});
  
    })
  })
   
  app.get('/fetch-marks',(req,res)=>{
    const query=`SELECT * FROM mark`;
  
    db.query(query, (err, results)=>{
      if(err){
        console.log(err); 
        return res.status(500).json({error:"Failed to fetch marks"});
        }
        res.status(200).json({marks:results});
    })
  })
  
  app.listen(PORT, () => { 
      console.log(`Server is running on port ${PORT}`)
  });
  