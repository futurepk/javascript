//1
const voornaam = "Jan";
let leeftijd = 23;
const isStudent = true;
console.log(`Ik ben ${voornaam}, ik ben ${leeftijd} jaar en student: ${true}`);

//2
const product = "laptop";
const prijs = 899;
var voorraad = 10;
voorraad -= 2;
console.log(`Nieuwe voorraad ${voorraad}`);

//3
const product3 = "Toetsenbord";
const prijs3 = 79.95;
const beschikbaar = true;
let kortingscode;
const korting = null;

console.log(typeof product3);
console.log(typeof prijs3);
console.log(typeof beschikbaar);
console.log(typeof kortingscode);
console.log(typeof korting);

//4
const aantal = "12";
const extra = 3;
const som4 = parseInt(aantal) + extra;
console.log("Het resultaat van aantal + extra is: " + aantal + extra);
console.log("Het echte resultaat van aantal + extra is: " + som4);

//5
let prijs4 = 24.95;
let aantal4 = 4;
let totaal4 = prijs4 * aantal4;
console.log(aantal4 + " T-shirts kosten €" + totaal4.toFixed(2));

//6
const celsius = 22;
const farenheit = (celsius * 9) / 5 + 32;
console.log(`${celsius}°C is ${farenheit}°F`);

//7
const filmDuur = 137;
const uren = Math.floor(filmDuur / 60);
const minuten = filmDuur % 60;
console.log("De film duurt " + uren + "uur en " + minuten + " minuten");

//8
let voorraad8 = 20;
voorraad8 += 5;
voorraad8 -= 3;
voorraad8 *= 2;
voorraad8++;
console.log(voorraad8);

//9
const gemiddelde = 7.638;
console.log(Math.round(gemiddelde));
console.log(Math.floor(gemiddelde));
console.log(Math.ceil(gemiddelde));
console.log(gemiddelde.toFixed(2));

//10
const leeftijd10 = 18;
const minimumLeeftijd = 18;
let oudGenoeg = true;
let exactMinimum = true;
let jongerDanMinimum = true;

if (leeftijd >= minimumLeeftijd) {
  oudGenoeg = true;
  console.log(oudGenoeg);
} else {
  oudGenoeg = false;
  console.log(oudGenoeg);
}

if (leeftijd === minimumLeeftijd) {
  exactMinimum = true;
  console.log(exactMinimum);
} else {
  exactMinimum = false;
  console.log(exactMinimum);
}

if (leeftijd < minimumLeeftijd) {
  jongerDanMinimum = true;
  console.log(jongerDanMinimum);
} else {
  jongerDanMinimum = false;
  console.log(jongerDanMinimum);
}

console.log("---------11");

//11
const getal = 5;
const tekst = "5";
console.log(getal === tekst);
console.log(getal !== tekst);
//eerste uitvoer is false tweede is true
console.log("---------12");
//12
const dag = "zaterdag";
let isWeekend = false;

if (dag === "zaterdag" || dag === "zondag") {
  isWeekend = true;
  console.log(isWeekend);
} else {
  isWeekend = false;
  console.log(isWeekend);
}
console.log("---------13");

//13
const leeftijd13 = 21;
const heeftTicket = true;
let magBinnen = false;

if (leeftijd13 >= 18 && heeftTicket) {
  magBinnen = true;
  console.log(magBinnen);
} else {
  magBinnen = false;
  console.log(magBinnen);
}

//14

const voorraad14 = 4;
let isUitverkocht = true;

if (voorraad14 === 0) {
  isUitverkocht = true;
  let isBeschikbaar = !isUitverkocht;
  console.log(isUitverkocht);
  console.log(isBeschikbaar);
} else {
  isUitverkocht = false;
  let isBeschikbaar = !isUitverkocht;
  console.log(isUitverkocht);
  console.log(isBeschikbaar);
}

//15
console.log("---------15");

const naam = "Jan";
if (naam) {
  console.log(`Dag ${naam}`);
} else {
  console.log("Geen naam ingevuld");
}

//16
console.log("---------16");
const totaal16 = 125;

if (totaal16 >= 100) {
  console.log("Korting van topassing");
} else {
  console.log("Geen korting");
}

//17
console.log("---------17");
const invoer = "12 stuks";
let invoerAantal = parseInt(invoer);
invoerAantal += 5;
console.log(invoerAantal);

//18
console.log("---------18");
const invoer18 = "24.50 euro";
let invoerKomma = parseFloat(invoer18);
invoerKomma *= 3;
console.log(invoerKomma.toFixed(2));

//19
console.log("---------19");
const getal19 = 17;
if (getal19 % 2 === 0) {
  console.log("even");
} else {
  console.log("oneven");
}

//20
console.log("---------20");

const prijsKoffie = 3.2;
const prijsCroissant = 2.8;
let aantalGekocht = prijsKoffie * 2 + prijsCroissant * 3;
let minimumTien = false;

if (aantalGekocht >= 10) {
  minimumTien = true;
  console.log(
    "Totaal: €" + aantalGekocht.toFixed(2) + "Minstens €10:" + minimumTien,
  );
} else {
  minimumTien = false;
  console.log(
    "Totaal: €" + aantalGekocht.toFixed(2) + " Minstens €10:" + minimumTien,
  );
}
