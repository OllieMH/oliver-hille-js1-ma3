/* Question 2
Make a call to the Rawg API.

Go to https://rawg.io/apidocs and get an API key which you’ll use as part of the endpoint you’re making an API call to. You can use https://noroff.no for the URL and Noroff Assignment for the description.

e14d870839574a368e27a24d11d3511f

You'll be given an API Key you can add as a "key" parameter in your fetch request.

Make a call to the following API endpoint replacing INSERTAPIKEYHERE with the key given to you from the Rawg API.
https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=e14d870839574a368e27a24d11d3511f

Loop through the results and display the following properties in HTML, but only for the first eight results:
name
rating
number of tags (not the tag details, just the amount of tags)
The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

Be sure to handle any potential errors in the code.

You can use either regular promise or async/await syntax to make the call.

Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.
*/

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
