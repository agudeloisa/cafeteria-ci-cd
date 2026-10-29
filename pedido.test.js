javascript

const test = require('node : test');
const assert = require('node : assert/strict');
const { calculartotal } = require('./pedido');

test('Dos almuerzos' , () = {
     assert.equal(calculartotal(12000, 2), 24000);
});

test('Tres jugos' , () = {
     assert.equal(calculartotal(4000, 3), 12000);
});
