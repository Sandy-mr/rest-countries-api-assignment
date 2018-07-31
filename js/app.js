var request = superagent;
var API_URL = "https://restcountries.eu/rest/v2/all";
var container = document.querySelector(".countries-container");

request
.get(API_URL)
.then(function(response){
  var countries = response.body;

  countries.forEach(function(c){

    var div = document.createElement('div');
    div.setAttribute("class", "country-card");

    var h4 = document.createElement("h4");
      h4.setAttribute("class", "country-name") ;
    h4.textContent = c.name;

    var img = document.createElement("img");
    img.setAttribute("class", "country-flag");
    img.src = c.flag;

    var p = document.createElement("p");
    p.setAttribute("class", "country-capital");
    p.textContent = c.capital;


    div.appendChild(p);
    div.appendChild(h4);
    div.appendChild(img);
    container.appendChild(div);
  });
     });

var API_URL = "https://api.github.com/users/sandy-mr/repos"
var ul = document.createElement("ul");
var body = document.querySelector("body");
  request
   .get(API_URL)
    .then(function(response){
   var repos = response.body;

  repos.forEach(function(repos){
    var li = document.createElement("li");

    li.textContent = repos.name;

    ul.appendChild(li);
  });
 body.appendChild(ul);
});
