var path = require("path");

// Allowing server.js to use these routes to send the user to the correct page
module.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
// if anything other than survey is used as a route the user will be redirected to home.html
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
