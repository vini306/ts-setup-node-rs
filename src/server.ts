import express from 'express';

const  app = express();

app.get('/',(reques,response) =>{
  response.send("Hello Worldd");
})

app.listen(3333);