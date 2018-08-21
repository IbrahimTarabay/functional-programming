// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title.trim().toLowerCase().split(/\W+/).join("-"); 
}

/*function urlSlug(title) {
  return title.toLowerCase().split(/[^a-zA-Z0-9]/).filter((x)=>x!="").join("-");
}*/ 
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
