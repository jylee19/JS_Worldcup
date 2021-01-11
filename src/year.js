const app = document.getElementById('root');

var request = new XMLHttpRequest();
request.open('GET', 'http://footballdb.herokuapp.com/api/event/world.2014/round/20?callback=?', true);
request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);
}

