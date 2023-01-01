/*
  Surkite klasę "trueFalse", kuri turi 4 metodus:
    metodas1 priima skaičių ir grąžina true jei skaičius didesnis už 100 ir false kitu atveju.
    metodas2 priima žodį ir grąžina true jeigu jis prasideda didžiąja raide ir false kitu atveju.
    metodas3 priima skaičių ir grąžina true jeigu šis yra lyginis ir false kitu atveju.
    metodas4 priima žodį ir grąžina true jeigu šis yra ilgesnis nei 8 raidžių ir false kitu atveju.
*/

class TrueFalse {
  constructor(){

  }

  metodas1(skaicius){
    if (skaicius>100){
      return true
    } else{
      return false
    }
  }

  metodas2(zodis){
    if (zodis.charAt(0)>"A" && zodis.charAt(0)<"Z"){
      return true
    } else{
      return false
    }
  }

  metodas3(skaicius){
    if (skaicius%2==0){
      return true
    } else{
      return false
    }
  }

  metodas4(zodis){
    if (zodis.length>8){
      return true
    } else{
      return false
    }
  }
}

x = new TrueFalse;

console.log("150 > 100 ?", x.metodas1(150));
console.log("50 > 100 ?", x.metodas1(50));

console.log("Elena iš didž. raidės ?", x.metodas2("Elena"));
console.log("lena iš didž. raidės ?", x.metodas2("lena"));

console.log("101 lyginis ?", x.metodas3(101));
console.log("100 lyginis ?", x.metodas3(100));

console.log("televizorius ilgesnis nei 8 raidės ?", x.metodas4("televizorius"));
console.log("labas ilgesnis nei 8 raidės ?", x.metodas4("labas"));