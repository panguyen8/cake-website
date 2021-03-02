/*
Software Engineering HW4 Javascript Tests
Author: Phuocan Nguyen
Date: March 1, 2021
*/

const orderFile = require("../../routes/orders");

test('test orderFile', () => {
   //check to see if file exists
   expect(orderFile).toEqual(expect.anything());

   //check to see if json var is null
   expect(orderFile.orderList).not.toBeNull();

   //check to see if the json array has data for cherry, plain, chocolate
   expect(orderFile.orderList.data[0]).toEqual(expect.anything());
   expect(orderFile.orderList.data[1]).toEqual(expect.anything());
   expect(orderFile.orderList.data[2]).toEqual(expect.anything());
});