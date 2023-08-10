require('dotenv').config();
const express =require('express');
const app =express();

const port=process.env.PORT;
app.listen(port,()=>console.log(`Server is listening on port Number ${port}...`));

app.use(express.json());
app.use(express.static('public'));

app.get('/',(req,res)=>{
res.send('Hello welcome to my Weather App');
});

