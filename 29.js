/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.

* Make a array of your three favorite fruits and call it favorite_fruits.
* Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas! */
var favorite_fruits = ["apples", "bananas", "cherries"];
if (favorite_fruits.indexOf("bananas") !== -1) {
    console.log("You really like bananas!");
}
if (favorite_fruits.indexOf("apples") !== -1) {
    console.log("You really like apples!");
}
if (favorite_fruits.indexOf("cherries") !== -1) {
    console.log("You really like cherries!");
}
if (favorite_fruits.indexOf("strawberry") !== -1) {
    // Do something if "strawberry" is found
}
if (favorite_fruits.indexOf("guava") !== -1) {
    // Do something if "guava" is found
}
