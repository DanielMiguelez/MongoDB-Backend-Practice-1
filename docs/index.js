const basicInfo = require('./basicInfo');
const components = require('./components');
const orders = require('./orders');
const products = require('./products');
const users = require('./users');

module.exports = {
...basicInfo,
...components,
...products,
...orders, 
...users

};