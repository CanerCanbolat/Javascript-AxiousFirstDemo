// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("Response", res);
//   })
//   .catch((e) => {
//     console.log("Erorr", e);
//   });

const getStarWarsPeople = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (e) {
    console.log("Poff Error:( Ühüüüü", e);
  }
};
//getStarWarsPeople(10);
const jokes = document.querySelector("#jokes");
const btn = document.querySelector("button");
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "No JOKES AVAİBLE SORRYY!!!";
  }
};

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
};

btn.addEventListener("click", addNewJoke);
