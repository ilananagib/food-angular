const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //connect body-parser
const PORT = process.env.PORT || 5000;

const mongoose = require('mongoose'); //calls mongoose
const database = ('mongodb://localhost:27017/kitchen'); //identifies database
mongoose.connect(database) //path that connects both

mongoose.connection.on('error', (error) => {
    console.log('Error connecting with mongoose', error);
});

mongoose.connection.on('connected', () => {
    console.log('Success connecting database');
});


const foodRouter = require('./routes/food.router');

app.use(bodyParser.json()); // this line tells the applciation to send objects to array. Line NEEDS to be here so json connects to Angularjs

app.use(bodyParser.urlencoded({ extended: true })); //enables req.body

app.use(express.static('server/public'));//always will be here

app.use('/food', foodRouter); //connect router to server

app.listen(PORT, function () {
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