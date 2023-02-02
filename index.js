// SECTION 2 LETS START 
// crée un programme qui va dire si une personne a un age donnée , + de 18 ans , elle peut passer son permis et et son permis pois lourd , 
//si elle entre 17 et 18 seulement permis voiture , en dessous de 17 trop jeune pour avoir le permis .
// prix du permis 17 ans : 1000 + 700 et recois 10% discount 
// prix du permis 18 ans : 2000 et recois 5% discount 
/*
const person = "jacques";
const age = 19;
const prix18afterdiscount = 2000 - 2000/100 * 5;
const prix17afterdiscount = 1700 - 1700 / 100 * 10  ; 

//ternaire petits programme 
const test = age>= 18 ? prix18afterdiscount : prix17afterdiscount;
console.log(test);

 statement if else if . 
if (age >= 18) {
    console.log(`tu peux passer ton permis voiture et poids lourd ${person} felicitations passe regler le prix de ${prix18afterdiscount} `);
} else if (age > 17 && age < 18) {
    console.log(`tu peux passer ton permis voiture ${person} et le prix est de ${prix17afterdiscount}`);

} else {
    console.log(`tu es trop jeune ${person} attend d'etre majeur`);
}


const agee = 16;
switch (agee) {
    case agee : 15;
    console.log('parfait tu as 15 ans ');
        
        break;

    case agee : 16;
    console.log('tu as 16 ans top');
    break;
    default:
        break;
}
----------------------------------------------------------------------------------------------------------------------------------------------
*/
/*
'use strict';   // pour la securité , ca interdits au developpeurs de faire des erreurs interdites -> dans cet exemple , il va ns donner l erreur sur la console 
// sans le use strict , il aurait juste rien afficher 

let hasDriversLicence = false;
const passTest = true;
if (passTest) hasDriverLicence = true;   // -> avec le use strict il va me dire que y a un probleme et que is not defined ! sans ca il aurait juste rien afficher 
if (hasDriversLicence) console.log('i can drive');
    

*/
// FONCTION : ce sont des variables mais en plus grand , avec plusieurs lignes de codes --> l avantage on peux reutiliser du code facilement avec une fonction 

function logger () {
                 console.log('my name is james');                                                                   //le code va etre executer 
}
logger();                                                                                                           // appelle la fonction et l affiche ds la console
logger();                                                                                                           // on peut appeler autant qu on veut , reutilisable
logger(); 




// une fonction peut etre reutiliser comme vu au dessus , mais beaucoup plus que ca , elle peut recevoir des données et renvoyer des données , les fonctions sont
// comme une machine.
// input data de la fonction , les parametres , qui vont etre utiliser ds la fonction ln 69

function fruitProcessor(apples,oranges){

    const juice = `Juice with ${apples} apples and ${oranges} oranges `;
    return juice;
} 

//ln 76 mnt on va donner les valeurs exactes des params (apples,oranges) 
//ln 76 (3,5) sont appelés des arguments !! 
const fruitMix = fruitProcessor(3,5);     
console.log(fruitMix);

// kn 77 mnt si on veut return toutes les données de la const juice , on doit mettre fruitprocessor(3,5) dans une const . 


// lets create a appelJuice only  reutilisons la fonction pr faire un jus de pomme 

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);



//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
//.34 declarations vs expressions