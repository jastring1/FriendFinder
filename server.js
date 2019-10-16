// required npm packages
var express = require("express");
var path = require("path")
//initializing express application
var app = express();
//setting port to either server environment or to run on local host with port 8080
var PORT = process.env.PORT || 8080;
//allowing express app to read from public directory
app.use(express.static(path.join(__dirname, './app/public')));
//boilerplate
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//including our different routes from seperate files so the server knows where to direct the user to
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

//starting the express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
