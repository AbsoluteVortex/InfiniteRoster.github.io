let players = [];


fetch("data/players.json")

.then(response => response.json())

.then(data => {

    players = data;

    displayPlayers(players);

});



function displayPlayers(list){

const container = document.getElementById("playerContainer");

container.innerHTML = "";


list.forEach(player => {


container.innerHTML += `

<div class="card">

<h2>${player.name}</h2>

<p>${player.position} - ${player.team}</p>

<p>Age: ${player.age}</p>

<p>Passing Yards: ${player.passingYards}</p>

<p>Touchdowns: ${player.touchdowns}</p>

</div>

`;


});


}



document
.getElementById("playerSearch")
.addEventListener("keyup", function(){


let search = this.value.toLowerCase();


let filtered = players.filter(player =>

player.name.toLowerCase().includes(search)

);


displayPlayers(filtered);


});

