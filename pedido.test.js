const test = require('node:test');
const assert = require('assert');
const { calcularPedido } = require('./pedido.js');

test(' calcularPedido multiplics precio y cantidad correctamente', () = {
     const resultado = calcularPedido(10, 3);
     assert.strictEqual(resultado, 30);
});
