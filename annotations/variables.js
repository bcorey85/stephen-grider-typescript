var apples = 5;
var speed = 'hello';
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
// built in objects
var now = new Date();
var colors = [ 'hi', 'hello' ];
var myNumbers = [ 1, 2, 34 ];
var truths = [ true, false ];
// Classes
var Car /** @class */ = (function() {
	function Car() {}
	return Car;
})();
var car = new Car();
// Object literal
var point = {
	x: 10,
	y: 20
};
// Function
var logNumber = function(i) {
	console.log(i);
};
// When to use annotations
// 1) Function that returns the 'any' type
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json);
console.log(coordinates);
