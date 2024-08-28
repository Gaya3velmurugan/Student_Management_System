require("dotenv").config();
const studentRoute = require("./routes/students/studentRoutes");   
const deptRoute = require("./routes/students/deptRoutes");   
const express = require ("express");
const db = require("./db/index");

    const app = new express();                 
    const port = process.env.PORT || 8000;   
    db();
    app.use(express.json());
    app.use("/students", studentRoute); 
    app.use ("/departments", deptRoute);  
 
    app.listen (port, () => 
        {          
        console.log(`Express app listening at http://localhost:${port}`);
});