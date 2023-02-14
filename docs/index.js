const basicInfo = require('./basicInfo');
const components = require('./components');
const orders = require('./orders');
const products = require('./products');


module.exports = {
...basicInfo,
...components,
...products,
...orders, 

};