function changeSlide(event){
    event.preventDefault();

    console.log(event)

    document.querySelector('.searchPage').classList.remove('active-slide')
    document.querySelector('.searchPage').classList.add('hide')
    document.querySelector('.searchResults').classList.add('active-slide')
    document.querySelector('.searchResults').classList.remove('hide')
    
    if (event.target.id == 'searchBtn') {
        bbPlayerSearch()
    } else if (event.target.id == 'searchTeamBtn'){
        bbTeamSearch()
    }else if (event.target.id == 'soccerSearchBtn'){
        soccerPlayerSearch()
    }else if (event.target.id == 'soccerSearchTeamBtn'){
        soccerTeamSearch()
    } else {
        console.log('ERROR!!!!ERROR!!!!ERROR!!!!ERROR!!!!')
    }
    
}

function bbPlayerSearch() { 
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
        $('#name').html(`<h1>${ballInfo.firstName} ${ballInfo.lastName}</h1>`)
        $('#info').html(`
        <p class="playerInfo">Date of Birth: ${ballInfo.dateOfBirth}</p>
        <p>Height: ${ballInfo.heightInMeters}m</p>
        <p>Weight: ${ballInfo.weightInKilograms}kg</p>
        <p>College name: ${ballInfo.collegeName}</p>
        <p>Country: ${ballInfo.country}</p>
        <p>Years pro: ${ballInfo.yearsPro}</p>
        <p>Jerser number: ${ballInfo.leagues.standard.jersey}</p>
        <p>Position: ${ballInfo.leagues.standard.pos}</p>
        <img src="https://nba-players.herokuapp.com/players/${personName}">`)
    
    })
}

// function searchStats() {
//     var playerID = ballInfo.playerId
//     $.ajax({
//         url: `https://api-nba-v1.p.rapidapi.com/players/playerId/${playerID}`,
//         crossDomain: true,
//         method: "GET",
//         headers: {
//             "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
//             "x-rapidapi-key": "b5a492aa05msh6869ac7f6671576p14fe03jsn3366a114fc88"    
//         }
//     })
//     .then(function(response) {
//         console.log(response)
//     })
// }
function bbTeamSearch() {
    var cityName = document.querySelector("#searchTeamBox").value
       console.log(cityName)

    $.ajax({
        url: `https://api-nba-v1.p.rapidapi.com/teams/city/${cityName}`,
        crossDomain: true,
        method: "GET",
        headers: {
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
            "x-rapidapi-key": "b5a492aa05msh6869ac7f6671576p14fe03jsn3366a114fc88"
        } 
    })
    .then(function(response) {
        console.log(response);
        var teamInfo = response.api.teams[0]
        console.log(teamInfo.fullName)
        $('#bbName').html(`<h1>${teamInfo.fullName}</h1>`)
        $('#image').html(`<img src="${teamInfo.logo}">`)
        $('#info').html(`
        <p class="teamInfo">Conference: ${teamInfo.leagues.standard.confName}
        <p class="teamInfo">Division: ${teamInfo.leagues.standard.divName}`)
        
        function searchStandings() {
            var teamID = teamInfo.teamId
            console.log(`teamID= ${teamID}`)
            $.ajax({
                url: `https://api-nba-v1.p.rapidapi.com/standings/standard/2018/teamId/${teamID}`,
                crossDomain: true,
                method: "GET",
                headers: {
                    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                    "x-rapidapi-key": "b5a492aa05msh6869ac7f6671576p14fe03jsn3366a114fc88"    
                }
            })
            .then(function(response) {
                console.log(response)
                var teamStandings = response.api.standings[0]
                $('#standings').html(`<h3><u>Stats for ${teamStandings.seasonYear}</u></h3>
                <p class="recordInfo">Away record: ${teamStandings.away.win}-${teamStandings.away.loss}
                <p class="recordInfo">Home record: ${teamStandings.home.win}-${teamStandings.home.loss}
                <p class="recordInfo">Record: ${teamStandings.win}-${teamStandings.loss}</p>
                <p class="recordInfo">Win percentage: ${teamStandings.winPercentage}
                <p class="recordInfo">Last 10 games: ${teamStandings.lastTenWin}-${teamStandings.lastTenLoss}</p>
                <p class="recordInfo">Division record: ${teamStandings.division.win}-${teamStandings.division.loss}</p>
                <p class="recordInfo">Conference record: ${teamStandings.conference.win}-${teamStandings.conference.loss}</p>`)
            })
        }
        searchStandings()
    })
}
// }
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
function soccerPlayerSearch(){

    var personNameSoccer = document.querySelector("#soccerSearchBox").value
    console.log(personNameSoccer)

    $.ajax({
        url: `https://football-pro.p.rapidapi.com/api/v2.0/players/search/${personNameSoccer}`,
        crossDomain: true,
        method: "GET",
        headers: {
            "x-rapidapi-host": "football-pro.p.rapidapi.com",
            "x-rapidapi-key": "b5a492aa05msh6869ac7f6671576p14fe03jsn3366a114fc88",
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
        <p>Place of Birth: ${soccerInfo.birthplace}, ${soccerInfo.birthcountry}</p>`

    })
}

function soccerTeamSearch(){

    var teamNameSoccer = document.querySelector("#soccerSearchTeamBox").value
    console.log(teamNameSoccer)

    $.ajax({
        url: `https://football-pro.p.rapidapi.com/api/v2.0/teams/search/${teamNameSoccer}`,
        crossDomain: true,
        method: "GET",
        headers: {
            "x-rapidapi-host": "football-pro.p.rapidapi.com",
            "x-rapidapi-key": "0b276ca072mshebd5f85a364591cp19a269jsn385a7112a304"
        }
    })
    .then(function(response) {
        console.log(response);
        var soccerTeamInfo = response.data[0]
        console.log(soccerTeamInfo.name)
        document.querySelector("#soccerName").innerHTML = `<h3>Full Name: ${soccerTeamInfo.name}</h3>`
        $('#soccerTeamImg').html(`<img src="${soccerTeamInfo.logo_path}">`)
        document.querySelector("#soccerInfo").innerHTML = 
        `<p>Year Founded: ${soccerTeamInfo.founded}</p>
        <p>Follow ${soccerTeamInfo.name} here: ${soccerTeamInfo.twitter}</p>
        `

    })
}``

<<<<<<< HEAD
let timer = 3
=======
function soccerStandingsEPL(){
    var leagueId = "2790"

    $.ajax({
        url: `https://api-football-v1.p.rapidapi.com/v2/leagueTable/${leagueId}`,
        async: true,
        crossDomain: true,
        method: "GET",
        headers: {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": "476277402fmshd7ca3272bb3a820p1d9269jsn1bc17a240f64"
        }
    }) 
    .then(function(response){
        var teamPosition = response.api.standings[0]

        for(let i=0; i<teamPosition.length; i++){
            
            document.getElementById('epl').innerHTML += `
            <tr>
            <td>${teamPosition[i].rank}</td>
            <td><img class="standingImg" src="${teamPosition[i].logo}"></td>
            <td>${teamPosition[i].teamName}</td>
            <td>${teamPosition[i].points}</td>
            </tr>
            `
        }
    })
}

function soccerStandingsBDL(){
    var leagueId = "2755"

    $.ajax({
        url: `https://api-football-v1.p.rapidapi.com/v2/leagueTable/${leagueId}`,
        async: true,
        crossDomain: true,
        method: "GET",
        headers: {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": "476277402fmshd7ca3272bb3a820p1d9269jsn1bc17a240f64"
        }
    }) 
    .then(function(response){
        var teamPosition = response.api.standings[0]

        for(let i=0; i<teamPosition.length; i++){
            
            document.getElementById('bundesliga').innerHTML += `
            <tr>
            <td>${teamPosition[i].rank}</td>
            <td><img class="standingImg" src="${teamPosition[i].logo}"></td>
            <td>${teamPosition[i].teamName}</td>
            <td>${teamPosition[i].points}</td>
            </tr>
            `
        }
    })
}

function soccerStandingsLLG(){
    var leagueId = "2833"

    $.ajax({
        url: `https://api-football-v1.p.rapidapi.com/v2/leagueTable/${leagueId}`,
        async: true,
        crossDomain: true,
        method: "GET",
        headers: {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": "476277402fmshd7ca3272bb3a820p1d9269jsn1bc17a240f64"
        }
    }) 
    .then(function(response){
        var teamPosition = response.api.standings[0]

        for(let i=0; i<teamPosition.length; i++){
            
            document.getElementById('laliga').innerHTML += `
            <tr>
            <td>${teamPosition[i].rank}</td>
            <td><img class="standingImg" src="${teamPosition[i].logo}"></td>
            <td>${teamPosition[i].teamName}</td>
            <td>${teamPosition[i].points}</td>
            </tr>
            `
        }
    })
}

soccerStandingsBDL()
soccerStandingsEPL()

let timer = 5
>>>>>>> 24144d501a184649534567e829699aefbfbe17bc

function countDown(){
    console.log("counting down ...")
    var timerInterval = setInterval(function(){
        timer--;
        if (timer == 0) {
            document.getElementById('welcome-text').classList.remove('hide')
            $('.carousel-inner').attr("style", "opacity: 60%")
        }
    }, 1000);
}

countDown()

// async function getUser() {
//     let user
//     while (true) {
//       let name = prompt('Enter a user name', 'rubjo')
//       try {
//         user = await loadJson(`https://my.api.com/users/${name}`)
//         break // No error, exit loop and proceed
//       } catch (err) {
//         if (err.response.status === 404) {
//           // Loop will continue after the alert
//           alert(`User "${name} not found, please reenter.`)
//         } else {
//           // Unknown error, rethrow it
//           throw err
//         }
//       }
//     }
  
//     alert(`Full name: ${user.name}.`)
//     return user
//   }