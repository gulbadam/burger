const express = require('express'),
    bodyParser = require('body-parser'),
    exphbs = require('express-handlebars'),
    methodOverride = require('method-override'),
    routes = require('./controllers/burger_controller.js'),
    app = express(),
    PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use("/", routes);
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.listen(PORT, console.log("Server active on port " + PORT));