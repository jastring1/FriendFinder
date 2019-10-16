var path = require("path")
//Array of Objects to hold information of users using the application
var friendArray = [
    {
        name: "Tripp",
        image: "https://miro.medium.com/max/1742/1*XLkyIpaeYOL52sS2QF7DLA.png",
        scores: [1,2,3,4,5,5,4,3,2,1]
    },
    {
        name: "Wes",
        image: "https://www.pikpng.com/pngl/m/72-727346_spongebob-characters-hd-png-download.png",
        scores: [2,3,1,4,5,4,2,3,1,5]
    },
    {
        name: "Haley",
        image: "https://miro.medium.com/max/1800/1*DCo5LIbgIWrFIOfl3UAMpA.png",
        scores: [5,4,3,2,1,1,2,3,4,5]
    },
    {
        name: "Margaret",
        image: "https://i.pinimg.com/originals/81/53/6d/81536d62e6158f4c11e9cb2dfed53e15.jpg",
        scores: [3,3,3,2,4,5,5,3,2,1]
    },

]
//exporting this array to be used in apiRoutes
module.exports = friendArray