const router = require('express').Router(); //after you move object to router efolder, insert this line. 

router.get('/' , (req, res) => {
    res.send(foods);
    });
  
    let foods = [{ //object with properties
      name : 'Apple',
      deliciousness_rating: 'OK',
      is_hot: 'No'
    }]
  
    module.exports = router; //insert this line in the end 