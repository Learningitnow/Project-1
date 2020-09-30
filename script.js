var basketball = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-nba-v1.p.rapidapi.com/players/lastName/james",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "b5a492aa05msh6869ac7f6671576p14fe03jsn3366a114fc88"
	}
}
document.querySelector(".searchBtn").addEventListener("click", searchApi)
function searchApi() {
    $.ajax(basketball).then(function (response) {
        console.log(response);
        var s = response.api.players[0]
        console.log(s.heightInMeters)
        document.querySelector(".card-text").textContent = `Height: ${s.heightInMeters}m`
        
    });
}
// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://football-pro.p.rapidapi.com/api/v2.0/players/search/neymar",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "football-pro.p.rapidapi.com",
// 		"x-rapidapi-key": "b5a492aa05msh6869ac7f6671576p14fe03jsn3366a114fc88"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });