console.log("hallo vanuit Javascript");
console.info("Ter informatie");
console.warn("Let op: de voorraad is bijna op!");
console.error("Dit is fout gelopen!");
console.table([
  { naam: "huisbland", prijs: 24.5 },
  { naam: "Ethopia Sidamo", prijs: 27.8 },
]);

//dit is commentaar

/*
meerdere regels commentaar
meerdere regels commentaar
*/

const winkelnaam = "Roast & Co.";
let aantalZaken = 12;

console.log(winkelnaam);
console.log(aantalZaken);
aantalZaken = 10;
console.table([{ naam: winkelnaam, hoevelZaken: aantalZaken }]);

console.log(typeof aantalZaken);
let korting = 0.21;
console.log(typeof korting);
let opVoorraad = true;
console.log(opVoorraad);
console.log(typeof opVoorraad);

const naam = "Milkyway";
const prijs = 25;
const aantal = 3;
console.log(naam);
console.log(prijs);
console.log("De naam is: " + naam + " en de prijs is: " + prijs);
console.log(`De naam is: ${naam} en de prijs is: ${prijs * aantal}`);

const ingetypt = "12";
console.log(Number(ingetypt) + 3);
console.log(parseInt("12 stuks", 10));
console.log(parseFloat("24.5"));
console.log(parseInt("24.5"));

let voorraad = 5;
console.log(`voorraad is ${voorraad}`);
voorraad = voorraad + 1;
console.log(`voorraad is ${voorraad}`);
//shorthand notatie
voorraad += 1;
console.log(`voorraad is ${voorraad}`);
voorraad *= 2;
console.log(`voorraad is ${voorraad}`);

const totaal = 75.3265465464;
console.log(totaal);
console.log(typeof totaal);
console.log(Math.round(totaal));
console.log(Math.floor(totaal));
console.log(Math.ceil(totaal));
console.log(totaal.toFixed(2)); //maakt er een string van dus alsje number wilt moetje parseFloat zetten

console.log(5 == 4); //vergelijken, is 5 gelijk aan 4? -> false
console.log(5 != 4); //is 5 verschillend van 4? -> true
console.log(5 < 7); // is 5<7? -> true
console.log(5 >= 7);

// ===
console.log("5" == 5); //string met int -> true (kijkt enkel naar de value dus die 50)
console.log("5" === 5); // kijkt naar de waarde en datatype -> false en vanaf dat er 1 false tussen zit is het false

// !==
console.log("5" != 4);
console.log("5" !== 5);

const inhuis = 3;
const branding = "medium";
console.log(inhuis > 0 && branding === "medium");
console.log(inhuis === 0 || branding === "medium");

const familienaam = "Balay";
if (familienaam) {
  console.log(`Dag ${familienaam}`);
} else {
  console.log(`Geen familienaam ingevuld`);
}

/*

2 variabelen vullen met integers (numbers)
deze getallen zal je optellen, delen, vermenigvuldigen en aftrekken
op het scherm: resultaat
de som van 2 getallen is, het product v2g is, deling, aftrekking...

die 4 resultaten optellen in een totaal _ + _ + _ + _ = _totaal_

*/

const var1 = 66;
const var2 = 11;

const som = var1 + var2;
const product = var1 * var2;
const aftrekking = var1 - var2;
const deling = var1 / var2;

console.log("Resultaat");
console.log("--------------");
console.log("De som van 2 getallen is: " + som);
console.log("Het product van 2 getallen is: " + product);
console.log("De deling van 2 getallen is: " + deling);
console.log("De aftrekking van 2 getallen is: " + aftrekking);
console.log("--------------");
console.log(
  "uitkomst van: som + product + deling + aftrekking = " +
    (som + product + aftrekking + deling),
);
