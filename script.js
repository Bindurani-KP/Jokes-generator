const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");


const apikey = "be/YfEg30SKu1zmiHm/A9w==0iegKiMGmOYmI2dA";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes";

async function getjoke() {


    try {

        jokeEl.innerText = "Updating....";
        btnEl.disabled = true;
        btnEl.innerText = "Loading....";
        const response = await fetch(apiURL, options)
        const data = await response.json()
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a Joke :) "

        jokeEl.innerText = data[0].joke;

    } catch (error) {
        jokeEl.innerText="An Error happened ,try again later";
        console.log(error);

    }


}

btnEl.addEventListener("click", getjoke);

