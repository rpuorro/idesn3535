// selecting a random array item

Array.prototype.random = function (length) {
    return this[Math.floor((Math.random()*length))];
};

var fruit = ['strawberry', 'mulberry', 'tangerine', 'overpriced organic grapes', 'grape soda', 'lime'];
var chosen_fruit = fruit.random(fruit.length);
document.write("<p>" + chosen_fruit + "</p>");



