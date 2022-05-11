// let url = "https://pokeapi.co/api/v2/pokemon/94";

let url = "https://pokeapi.co/api/v2/pokemon/";
let num = Math.floor(Math.random() * 500 + 1);
// fetch(url);
fetch(url + num)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log("pokemon data: ", data);
    console.log("pokemon pic:", data.sprites);
    // front_default, back_default, front_shiny, back_shiny
    console.log("pokemon name:", data.species.name);
    console.log("pokemon types 1:", data.types[0].type.name);
    // console.log("pokemon types 2:", data.types[1].type.name);

    insertPic(data);
    insertShuffle(data);
    insertDetail(data);
  });

function insertPic(data) {
  let picContainer = document.getElementById("pic-container");
  let pokemonPic = data.sprites;

  let frontD = document.createElement("img");
  let backD = document.createElement("img");
  let frontS = document.createElement("img");
  let backS = document.createElement("img");

  frontD.setAttribute("src", pokemonPic.front_default);
  backD.setAttribute("src", pokemonPic.back_default);
  frontS.setAttribute("src", pokemonPic.front_shiny);
  backS.setAttribute("src", pokemonPic.back_shiny);

  frontD.setAttribute("class", "pokemon_pic");
  backD.setAttribute("class", "pokemon_pic");
  frontS.setAttribute("class", "pokemon_pic");
  backS.setAttribute("class", "pokemon_pic");

  picContainer.appendChild(frontD);
  picContainer.appendChild(backD);
  picContainer.appendChild(frontS);
  picContainer.appendChild(backS);
}

function insertShuffle(data) {
  let shuffleDisp = document.getElementById("shuffle-disp");
  let shufflePic = document.createElement("img");
  let shuffle = [];
  let pokemonPic = data.sprites;
  let count = 0;

  shufflePic.setAttribute("src", pokemonPic.front_default);
  shufflePic.setAttribute("class", "w-full");

  shuffleDisp.appendChild(shufflePic);

  shuffle.push(pokemonPic.front_default); // shuffle[0]
  shuffle.push(pokemonPic.back_default); // shuffle[1]
  shuffle.push(pokemonPic.front_shiny); // shuffle[2]
  shuffle.push(pokemonPic.back_shiny); // shuffle[3]

  let interval = setInterval(function () {
    shufflePic.setAttribute("src", shuffle[count]);
    count++;
    if (count == 4) {
      count = 0;
    }
  }, 2000);
  // setInterval(function(){}, 1000)
}

function insertDetail(data) {
  let detailContainer = document.getElementById("detail-container");
  let name =
    data.species.name[0].toUpperCase() + data.species.name.substring(1);
  let id = data.id;
  let height = data.height;
  let weight =
    String(data.weight).slice(0, 2) + "." + String(data.weight).slice(-1); // 40.5 kg
  let typeOne =
    data.types[0].type.name[0].toUpperCase() +
    data.types[0].type.name.substring(1);
  //   let typeTwo;
  //   if (data.types[1].type.name != undefined) {
  //     typeTwo = data.types[1].type.name;
  //   } else {
  //     typeTwo = "none";
  //   }
  let pokemonName = document.createElement("p");
  let infoContainer = document.createElement("div");
  let pokemonHeight = document.createElement("div");
  let pokemonWeight = document.createElement("div");
  let pokemonTypeOne = document.createElement("div");
  //   let pokemonTypeTwo = document.createElement("div");

  pokemonName.innerHTML = `${name}#${id}`;
  pokemonName.setAttribute("class", "text-3xl");

  infoContainer.setAttribute(
    "class",
    "flex justify-between flex-wrap w-80 text-2xl"
  );

  pokemonHeight.innerHTML = `Height: <br> ${height}0 cm`;
  pokemonHeight.setAttribute("class", "flex-1 mr-6 mt-4");

  pokemonWeight.innerHTML = `Weight: <br> ${weight} kg`;
  pokemonWeight.setAttribute("class", "flex-1 ml-6 mt-4");

  pokemonTypeOne.innerHTML = typeOne;
  pokemonTypeOne.setAttribute(
    "class",
    "flex-1 text-center rounded-full text-white bg-purple-600 mt-8 mx-6 py-1"
  );

  detailContainer.append(pokemonName);
  detailContainer.appendChild(infoContainer);

  infoContainer.append(pokemonHeight);
  infoContainer.append(pokemonWeight);
  infoContainer.append(pokemonTypeOne);

  //   if (pokemonTypeTwo != null) {
  //     pokemonTypeTwo.innerHTML = typeTwo;
  //     pokemonTypeTwo.setAttribute(
  //       "class",
  //       "flex-1 text-center rounded-full text-white bg-purple-400 mt-8 mx-3 py-1"
  //     );
  //     infoContainer.append(pokemonTypeTwo);
  //   }
}

// fetch(url).then((res) => {}).then((data) => {})

// async function fetch(url) {
// calculate
//   await return result;
// }
