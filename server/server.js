const express = require('express');
const app = express();
const PORT = process.env.PORT|| 5000;

const foodRouter = require('./routes/food.router');


app.use(express.static('server/public'));//always will be here

app.use('/food', foodRouter); //connect router to server

app.listen(PORT, function(){
    console.log('server running on: ', PORT);
  }); // all above required to start server

//   app.get('/food' , (req, res) => {
//   res.send(foods);
//   });

//   let foods = [{ //object with properties
//     name : 'Apple',
//     deliciousness_rating: 'OK',
//     is_hot: 'No'
//   }]

  // Now we want to move the object to the router