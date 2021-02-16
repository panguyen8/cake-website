/*
Software Engineering HW3 Javascript Tests
Author: Phuocan Nguyen
Date: February 15, 2021
*/
const sum = require('../javascripts/sum.js');
test('adds 1 + 2 to equal 3', () => {
 expect(sum(1, 2)).toBe(3);
});