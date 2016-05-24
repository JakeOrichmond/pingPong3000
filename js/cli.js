var pingPong = require('./ping-pong.js').pingPong;

console.log('Ping-ponging up to 100!');
var goal = prompt('what number would you lime me to ping pong up to?');
var result = pingPong(goal);
result.forEach(function(element) {
  console.log(element);
});
