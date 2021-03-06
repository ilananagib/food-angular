const router = require('express').Router(); //after you move object to router folder, insert this line. 
const Foods = require('../models/food.schema'); //connect router to schema

router.get('/', (req, res) => {
    //res.send(foods); this line will get replaced to connect to the database
    Foods.find({})
        .then((datafromthedatabase) => {
            res.send(datafromthedatabase)
        })
        .catch((error) => {
            console.log(error)
            res.sendStatus(500);
        })
});

let foods = [{ //object with properties
    name: 'Apple',
    deliciousness_rating: 'OK',
    is_hot: 'No'
}]

router.post('/', (req, res) => { //connect to the server
    // foods.push(req.body); //push new item into the array / this line will be replaced
    // res.sendStatus(201);
    Foods.create(req.body)
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(error)
            res.sendStatus(500)
        });
});
// this is connecting the router to the database
router.delete('/', (req, res) => {
    Foods.findByIdAndRemove(req.query._id) // delete button doesn't work with req.body only with req.query//
        .then((response) => {
            res.send(202);
        })
        .catch ((error) => {
            console.log(error)
            res.sendStatus(500)
        })
});

router.put('/', (req, res) => {
    Foods.findOneAndUpdate(req.body._id, req.body) // req.body._id requests the Id and updates to req.body Id
    .then ((response) => {
    res.sendStatus(202);
    })
    .catch ((error) => {
        console.log(error)
        res.sendStatus(500)
});

});
module.exports = router; //insert this line in the end//