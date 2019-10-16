var path = require("path")
//Array of Objects to hold information of users using the application
var friendArray = [
    {
        name: "Tripp",
        image: path.join(__dirname,"'./app/images/tripp.jpg'"),
        scores: [1,2,3,4,5,5,4,3,2,1]
    },
    {
        name: "Wes",
        image: path.join(__dirname,"./app/images/ali.jpg"),
        scores: [2,3,1,4,5,4,2,3,1,5]
    },
    {
        name: "Haley",
        image: path.join(__dirname,"./app/images/haley.jpg"),
        scores: [5,4,3,2,1,1,2,3,4,5]
    },
    {
        name: "Margaret",
        image: path.join(__dirname,"./app/images/margaret.jpg"),
        scores: [3,3,3,2,4,5,5,3,2,1]
    },

]
//exporting this array to be used in apiRoutes
module.exports = friendArray