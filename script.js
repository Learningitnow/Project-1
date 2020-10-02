
// us try.. catch(err) .. for Error 404 page


// var basketball = {
    //     "async": true,
    // 	"crossDomain": true,
    // 	// "url": "https://api-nba-v1.p.rapidapi.com/players/lastName/",
    // 	"method": "GET",
    // 	"headers": {
        //         "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        // 		"x-rapidapi-key": "b5a492aa05msh6869ac7f6671576p14fe03jsn3366a114fc88"
        // 	}
        // }
function changeSlide(){
    
    document.querySelector('.searchPage').classList.remove('active-slide')
    document.querySelector('.searchPage').classList.add('hide')
    document.querySelector('.searchResults').classList.add('active-slide')
    document.querySelector('.searchResults').classList.remove('hide')
    
    searchApi()
    
}

function changesoccerSlide(){
    
    document.querySelector('.searchPage').classList.remove('active-slide')
    document.querySelector('.searchPage').classList.add('hide')
    document.querySelector('.searchResults').classList.add('active-slide')
    document.querySelector('.searchResults').classList.remove('hide')
    
    searchApi2()
    
}
function searchApi() { 
    var personName = document.querySelector("#searchBox").value
    console.log(personName)

    $.ajax({
        url: `https://api-nba-v1.p.rapidapi.com/players/lastName/${personName}`,
        crossDomain: true,
        method: "GET",
        headers: {
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
            "x-rapidapi-key": "b5a492aa05msh6869ac7f6671576p14fe03jsn3366a114fc88"
        }
    })
    .then(function(response) {

        console.log(response);
        var ballInfo = response.api.players[0]
        console.log(ballInfo.heightInMeters)
        $('#name').html(`<h3>Full Name: ${ballInfo.firstName} ${ballInfo.lastName}</h3>`)
        $('#info').html(`
        <p>Date of Birth: ${ballInfo.dateOfBirth}</p>
        <p>Height: ${ballInfo.heightInMeters}m</p>
        <p>Weight: ${ballInfo.weightInKilograms}kg</p>
        <p>College name: ${ballInfo.collegeName}</p>
        <p>Country: ${ballInfo.country}</p>
        <p>Years pro: ${ballInfo.yearsPro}</p>
        <p>Jerser number: ${ballInfo.leagues.standard.jersey}</p>
        <p>Position: ${ballInfo.leagues.standard.pos}
        </p>`)
        
        
    })
}
//var settings = {
	//"async": true,
	//"crossDomain": true,
	//"url": "https://football-pro.p.rapidapi.com/api/v2.0/players/search/Virgil%2520van%2520Dijk?tz=Europe%252FAmsterdam",
	//"method": "GET",
	//"headers": {
        //"x-rapidapi-host": "football-pro.p.rapidapi.com",
		//"x-rapidapi-key": "0b276ca072mshebd5f85a364591cp19a269jsn385a7112a304"
        //}
        //}
function searchApi2(){

    var personNameSoccer = document.querySelector("#soccerSearchBox").value
    console.log(personNameSoccer)

    $.ajax({
        url: `https://football-pro.p.rapidapi.com/api/v2.0/players/search/${personNameSoccer}`,
        crossDomain: true,
        method: "GET",
        headers: {
            "x-rapidapi-host": "football-pro.p.rapidapi.com",
            "x-rapidapi-key": "0b276ca072mshebd5f85a364591cp19a269jsn385a7112a304"
        }
    })
    .then(function(response) {
        console.log(response);
        var soccerInfo = response.data[0]
        console.log(soccerInfo.birthcountry)
        document.querySelector("#soccerName").innerHTML = `<h3>Full Name: ${soccerInfo.display_name}</h3>`
        $('#soccerPlayerImg').html(`<img src="${soccerInfo.image_path}">`)
        document.querySelector("#soccerInfo").innerHTML = 
        `<p>Date of Birth: ${soccerInfo.birthdate}</p>
        <p>Height: ${soccerInfo.height}</p>
        <p>Weight: ${soccerInfo.weight}</p>
        <p>Place of Birth: ${soccerInfo.birthplace}, ${soccerInfo.birthcountry}</p>
        <p>Image: ${soccerInfo.image_path}</p>
        `

    })
}``
// $('#searchBtn').on('click', function(){
//     console.log('button was clicked')
//     $('searchPage').classList.remove('active-slide')
//     $('searchPage').classList.add('hide')
//     $('searchResults').classList.add('active-slide')
//     $('searchPage').classList.remove('hide')
// })

