// const express = require('express');
// const app = express();

//app.listen(3000, () => console.log('listening at 3000'))
//app.use(express.static('public'));
// app.use(express.json({ }))

// let Router = require("./router");

// let routes = {
//     main: Main,
//     countries: Countries
// };

document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById('root');

    var request = new XMLHttpRequest();
    request.open('GET', 'http://footballdb.herokuapp.com/api/event/world.2014/round/20?callback=?', true);
    request.onload = function() {
        var data = JSON.parse(this.response);
        console.log(data);
    }

    // let content = document.querySelector(".content");
    // router = new Router(content, routes);
    // router.start();
    // window.location.hash = "#main";
    // letnavItems = Array.from(document.querySelectorAll(".nav li"));
    // navItems.forEach(navItem => {
    //     navItem.addEventListener("click", () => {
    //         let name = navItem.innerText.toLowerCase();
    //         location.hash=name;
    //     });
    // });
});
