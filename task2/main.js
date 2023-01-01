/*
  Parašyti JS kodą, kuris skaičiuos kiek kartų buvo paspausta ant vieno arba kito elemento ekrane. (Ekrane turėti 2 nuotraukas ir laukelį po jomis, kuriame bus atvaizduojama kiek kartų buvo paspausta ant kurios nuotraukos)
*/
let c1 = 1;
document.querySelector("#k1 > img").addEventListener("click", e => {
  console.log("Paspaudėte 1 paveiksliuką");
  document.querySelector("#k1 > h1").innerHTML = c1++;
})

let c2 = 1;
document.querySelector("#k2 > img").addEventListener("click", e => {
  console.log("Paspaudėte 2 paveiksliuką");
  document.querySelector("#k2 > h1").innerHTML = c2++;
})
