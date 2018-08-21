function splitify(str) {
  // Add your code below this line
  var string = "Split me into an array";
  var array = [];

// Only change code below this line.

array = str.split(/\W+/g);
  
  return array;
  // Add your code above this line
}
splitify("Hello World,I-am code");

