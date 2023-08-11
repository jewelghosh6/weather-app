require('dotenv').config();
const express =require('express');
const axios=require('axios');
const app =express();

const port=process.env.PORT;
app.listen(port,()=>console.log(`Server is listening on port Number ${port}...`));

app.use(express.json());
app.use(express.static('public'));

app.post('/weather',(req,res)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${req.body.latitude}&lon=${req.body.longitude}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=Metric`;
    //console.log(req.body);
    axios({
        method:'get',
        url:url,
        responseType:'json'
    }).then(data => {
        console.log(data.data);
        res.json(data.data)});
});

