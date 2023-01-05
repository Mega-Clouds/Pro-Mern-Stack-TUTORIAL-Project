var express = require('express');
let exp = express();								// Using the required express as an object.

exp.use(express.static('static'));

exp.listen(2000);