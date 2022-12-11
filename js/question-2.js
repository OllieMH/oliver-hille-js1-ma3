// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=e14d870839574a368e27a24d11d3511f";
const resultsContainer = document.querySelector(".results");

async function getGames() {
	var response = await fetch(url);
	var data = await response.json();
	console.log(data);
	const games = data.results;
	resultsContainer.innerHTML = "";

	for (let i = 0; i < 8; i++) {
		resultsContainer.innerHTML += `<div class="result">
                                        Name: ${games[i].name}<br>
                                        Rating: ${games[i].rating}<br>
                                        Number of tags: ${games[i].tags.length}
                                        </div>`;
	}
}

getGames();
