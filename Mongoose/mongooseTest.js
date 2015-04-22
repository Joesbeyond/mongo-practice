// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var kittySchema = mongoose.Schema({
    name: String
})

var Kitten = mongoose.model('Kitten', kittySchema)

var silence = new Kitten({ name: 'Silence' })
console.log(silence.name) // 'Silence'