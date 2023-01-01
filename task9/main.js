/*
  Sukurkite klasę, kuri priima 4 savybes ir turi 2 metodus.
  Savybės: masinosMarke, masinosModelis, masinosKaina, masinosGamybosMetai.
  Metodai:
    1 metodas tikrina ar mašina brangesnė negu 10 000 eurų ir grąžina true|false.
    2 metodas tikrina ar mašina senesnė negu 2010 ir grąžina mašinos amžių ir tekstą "Antikvaras"|"Šviežiena".
*/

class Car {
  
  constructor(masinosMarke, masinosModelis, masinosKaina, masinosGamybosMetai){
    [this.masinosMarke, this.masinosModelis, this.masinosKaina, this.masinosGamybosMetai] = [masinosMarke, masinosModelis, masinosKaina, masinosGamybosMetai]
  }

  kaina(){
    if (this.masinosKaina>10000){
      return true
    } else{
      return false
    }
  }

  amzius(){

    let data = new Date();
    let amzius = data.getFullYear() - this.masinosGamybosMetai

    if (this.masinosGamybosMetai<2010){
      return "Mašinos amžius - " + amzius + " m. - Antikvaras"
    } else{
      return "Mašinos amžius - " + amzius + " m. - Šviežiena"
    }
  }

}

let kia = new Car("KIA","Sportage", 17000, 2015);
let bmw = new Car("BMW", "X5", 5000, 2005)

console.log("BMW kaina > 10000 ?", bmw.kaina());
console.log("BMW amžius -", bmw.amzius());

console.log("KIA kaina > 10000 ?", kia.kaina());
console.log("KIA amžius -", kia.amzius());
