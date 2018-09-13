/**
 * app.js 
 * Implementation of the Product API
 */

var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/', express.static('public'));

// starting the server
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Products server listening at http://localhost:' + port);  
});


// list of products we'll keep in memory
var products = [{
  id : 1,
  name : "iPhone XL",
  description : "Extra large"  
}];

// Getting an individual product
app.get('/api/products/:id', function (req, res) {
  var id = req.params.id;

  if (id > products.length || id < 1) {
    res.status(404).send();
    return;
  }

  res.send(products[id - 1]);
});

// adding a new course to the collection
app.post('/api/products', function (req, res) {
  var product = req.body;
  product.id = product.length + 1;

  product.push(req.body);

  res.location("/api/products/" + product.id);
  res.status(204);
  res.send();
});
