//app.js

'use strict';
const greetings = "Welcome!!!";

var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.listen(process.env.PORT || 3000);

var someFunction = function() {
	let message = "Welcome to Node World!!";
	console.log(`the message is ${message}`);
};

someFunction();