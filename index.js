
let boutonArret = false;
let timeKelerIdFeuOrange = null;
let timeKelerIdFeu = null;
const bouton = document.querySelector('#bouton');
// appel de la fonction du cyle normale du feu rouge;
cycleNormale();

//si le bouton d'arrêt pour les piétons est actionné juste au moment du "feu vert"
//alors en interempe le cycle normal, pour appeler un autre cycle qui remet le feu rouge
//et enfin, faire appel au cycle normal du feu tri color.
bouton.addEventListener('click', function() { 

   let elementfeuVert = document.querySelector('#vert');   
   
        if(elementfeuVert.className === 'cercleV'){ 

            boutonArret = true;
            clearTimeout(timeKelerIdFeuOrange);
            clearTimeout(timeKelerIdFeu);
            cycleAvecBouton();   
            boutonArret = false; 
        }
});


function cycleNormale() {  

    feuRouge();        
    setTimeout(feuVert,  7000);       
    timeKelerIdFeuOrange = setTimeout(feuOrange, 14000);
       
        if(!boutonArret){
                timeKelerIdFeu = setTimeout(cycleNormale, 16000);
        }
}

function cycleAvecBouton() {
    setTimeout(feuOrange,  1000);      
    setTimeout(cycleNormale,  2000);
}

function feuRouge() {
        let el1 = document.querySelector("#rouge");
        let el2 = document.querySelector("#orange");
        let el3 = document.querySelector("#vert");
        
        el1.className = "cercleR";
        el2.className = "offOrange";
        el3.className = "offVert";
}


function feuOrange() {
        let el1 = document.querySelector("#rouge");
        let el2 = document.querySelector("#orange");
        let el3 = document.querySelector("#vert");
        
        el1.className = "offRouge";
        el2.className = "cercleO";
        el3.className = "offVert";
    
}

function feuVert() {
        let el1 = document.querySelector("#rouge");
        let el2 = document.querySelector("#orange");
        let el3 = document.querySelector("#vert");
        
        el1.className = "offRouge";
        el2.className = "offOrange";
        el3.className = "cercleV";
}


