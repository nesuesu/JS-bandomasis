/*
  Parašyti JS kodą, kuris leis vartotojui įvesti temperatūrą celsijumi arba farenheitu.
  Įvedus celsijų - parodoma kiek temperatūros tai būtų farenheitu | įvedus farenheitą - parodoma kiek temperatūros tai būtų celsijumi.
*/

// formulės
// f = c * 1.8 + 32
// c = (f - 32) / 1.8 

function convert_CtoF (c) {
  return (c * 1.8 + 32).toFixed(2)
}

function convert_FtoC (f) {
  return ((f - 32) / 1.8).toFixed(2)
}


let forma = document.querySelector("#converter > form");
forma.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e);
  let [cel,far] = [e.target.cel.valueAsNumber, e.target.far.valueAsNumber];
  console.log(cel, far);
  
  let f = convert_CtoF (cel); 
  let c = convert_FtoC (far); 
  console.log(f, c);

  if (document.querySelector("#converter > div")) {
    document.querySelector("#converter > div").remove();
  }
  
  let div = document.createElement("div");

  // let heading1 = document.createElement("h1");
  // let tekstas1 = document.createTextNode(`${cel}°C = ${f}°F`);
  // heading1.append(tekstas1); 
  // let heading2 = document.createElement("h1");
  // let tekstas2 = document.createTextNode(`${far}°F = ${c}°C`);
  // heading2.append(tekstas2); 

  let heading = document.createElement("h1");
  let tekstas1 = document.createTextNode(`${cel}°C = ${f}°F`);
  let tekstas2 = document.createTextNode(`${far}°F = ${c}°C`);
  let br = document.createElement("br");
  heading.append(tekstas1,br,tekstas2); 
  div.append(heading);

  // forma.parentElement.append(div);

  let converter = document.querySelector("#converter");
  converter.append(div);
  
})