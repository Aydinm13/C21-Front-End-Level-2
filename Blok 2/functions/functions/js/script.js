let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom? om het duidelijk te maken dat het een tekst is.________ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype integer waarom? om het duidelijk te maken dat we getalen gaan gebruiken.__ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen?In JavaScript moet je een variabele eerst declareren.__ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen 17._______ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de Pointing device button._____ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde getName.___ de waarde noemen we een Any.___ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een melding op het scherm met de tekst je naam deze tekst staan op regel 17__ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? Nee._____ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? als er op foto wrodt gedrukt dan verstopt het en waar wordt deze in je HTML aangeroepen? 23._______ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML regel 25_____ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? Returns a reference to the first object with the specified value of the ID attribute.____________ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? als je op het foto klikt wordt het aangetoond_ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen 32__________ en wanneer wordt deze aangeroepen als je op de button klikt._____ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan integer (rekenen)___ en waar komt de waarde van getal vandaan? 3______ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? Returns the first element that is a descendant of node that matches selectors._________  Wat is antwoord hier? 8 vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? alles word plus 3._______ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? dan wrodt niet meer plus 3 maar plus of min de getaal dat jij hebt gekozen.______ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt? 
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen 44______ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan setcolor_____ en waar komt de waarde van kleur vandaan? style.color________ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? style.fontsize_______ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? de kleur van de tekst verandert en de lettertype wordt groter____ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven je geeft aan dat getname is een tekst_____ en wanneer gebeurt dat als je op de button klikt.__ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? er gebeurt niks en ik krijg me melding gewoon._______ vul je antwoord in op de lijn.