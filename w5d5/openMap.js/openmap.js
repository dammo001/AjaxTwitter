var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var getCoordinates = function() {
  reader.question("Enter City Name: ", function(city){
    console.log(city);
    // var url = "http://nominatim.openstreetmap.org/search/?q="+ city +"&format=json&limit=1";
    // var xmlHttp = new XMLHttpRequest();
    // xmlHttp.open( "GET", url, false ); // false for synchronous request
    // xmlHttp.send( null );
    // console.log(xmlHttp.responseText);
  });
};

getCoordinates();
reader.close();
