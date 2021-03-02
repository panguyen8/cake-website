/*
Software Engineering HW4 Javascript Tests
Author: Phuocan Nguyen
Date: March 1, 2021
*/

var express = require('express');
var router = express.Router();

var orderList = {
    "data": [
         {
            "topping" : "cherry",
            "quantity": 6
         },
         {
            "topping": "plain",
            "quantity": 1
         },
         {
            "topping": "chocolate",
            "quantity": 4
         }
    ]
};

router.get('/', function(req, res, next) {
  res.send(arrayOrders);
});

/*
/ POST function to send to cheesecakejs, to change quantity data
/
*/
router.post('/', function(req, res, next) {
    var cherryList = (orderList.data[0].quantity + " " + orderList.data[0].topping);
    var plainList = (orderList.data[1].quantity + " " + orderList.data[1].topping);
    var chocolateList = (orderList.data[2].quantity + " " + orderList.data[2].topping);
    res.send({cherry: cherryList, plain: plainList, chocolate:chocolateList});
});



module.exports = router;
module.exports.orderList = orderList;
