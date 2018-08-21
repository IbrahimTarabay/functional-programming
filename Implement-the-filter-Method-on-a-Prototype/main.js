/*var filteredList;

function findRatedTitles(arr){
    filteredList = arr.filter(function(item){
//   remove this line   item.imdbRating = Number(item.imdbRating);
    var rating = Number(item.imdbRating); // only the variable rating is a number and the original object rating is still string
      if(rating >= 8){
        return rating;
      }
    }).map(function(item){
      var title = item.Title;
      var rating = item.imdbRating;
      var obj = {
        title,
        rating
      };
    return obj;
  });
  return filteredList;
}
findRatedTitles(watchList);*/

// the global Array
var s = [23, 65, 98, 5];

 Array.prototype.myFilter = function(callback){
 var newArray = [];

 this.forEach(el => callback(el) ? newArray.push(el): '')

  return newArray;
 };




var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

console.log(new_s);


