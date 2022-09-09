const express = require('express');
const app = express();
const PORT = 1234;

app.use(express.static('src'));

app.get("/", (req,res)=>{
    res.sendFile('index.html');
})

app.listen(PORT,()=>{
    console.log(`Listening in localhost:${PORT}`);
})