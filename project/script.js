
var parser = require('node-markdown');

var html = parser.Markdown('Using **markdown** helps you focus on writting, *not* on markup');

console.log(html);