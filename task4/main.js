/*
  Parašyti JS kodą, kuris, vartotojui atėjus į puslapį, iš data.json failo į ekraną išvestų filmus ir aktorius, kurie tuose filmuose vaidina. (duomenų yra didelis perteklius, jums jų visų naudoti nereikia. Tik filmų pavadinimai ir aktorių vardai+pavardės).
*/

// data.movies[0].title
// data.movies[0].castAndCrew.actors[0].name


fetch("data.json")
.then(res => res.json())
.then(data => {

  // console.log(data);
  // let [title,actors] = [data.movies[0].title, data.movies[0].castAndCrew.actors[0].name]
  // console.log(title, actors)

  let filmai = document.querySelector("#filmai"); 

  data.movies.forEach((element,ind) => {
    let div = document.createElement("div");
    div.classList.add("card");

    let h = document.createElement("h3");
    let tekstas = document.createTextNode(ind+1 + " - " + element.title);
    h.append(tekstas);

    let ph = document.createElement("img");
    ph.setAttribute("src", element.photos.poster[0]);
    ph.classList.add("poster");

    let actors = document.createElement("div");

    div.append(h, ph, actors);
    filmai.append(div);

    element.castAndCrew.actors.forEach(el =>{
      let span = document.createElement("span");
      let tekstas = document.createTextNode(el.name+", ");
      span.append(tekstas);
      actors.append(span);
    })

  });

})