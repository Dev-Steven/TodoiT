const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;
// const io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public/dist/public' ));

// Mongoose
require('./server/config/mongoose.js');

// Routes
require('./server/config/routes')(app);

app.listen(port, function() {
console.log(`listening on port ${port}`);    
})