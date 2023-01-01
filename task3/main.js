/*
  Parašyti JS kodą, kuris vartotojui paspaudus ant mygtuko "Rodyti Vartotoją" užkrautų vartotoją iš API į ekraną. (Mygtukas neberodomas ekrane po jo paspaudimo. Nebūtina ekrane rodyti visos informacijos apie vartotoją.)
  API nuoroda: https://randomuser.me/api/
*/


let bttn = document.querySelector("button");  // ?
bttn.addEventListener("click", e =>{
  console.log("Paspaudėte mygtuką");

  fetch("https://randomuser.me/api/")
  .then(res => res.json())
  .then(data => {
    console.log(data);

    let [title, name, surname, picture, age] = [
    data.results[0].name.title,
    data.results[0].name.first,
    data.results[0].name.last,
    data.results[0].picture.large,
    data.results[0].dob.age
    ]

    console.log(title, name, surname, picture, age);

    document.querySelector(".person").innerHTML = `
    <img src="${picture}" alt="foto">
    <h2>${title} ${name} ${surname}</h2>
    <p>Amžius: ${age}</p>
    `

    bttn.classList.add("slepti");


  })
});


