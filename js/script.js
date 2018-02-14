var $ = el => document.querySelector(el);

var recupValeur = classe => $(classe).value;

// VARIABLE VALEUR
var volumeP = recupValeur('.volumeP'); //1er input
var poidsV = recupValeur('.poidsV'); //2eme` input
var volume3P = recupValeur('.volume3P');//3ème input
var poidsV3 = recupValeur('.poidsV3'); //4ème input
var volumeV3 = recupValeur('.volumeV3');//5ème input
var v3Volume = recupValeur('.v3Volume');//6ème input

//VARIABLE BUTTON
var button1 = $('.button1');
var button2 = $('.button2');
var button3 = $('.button3');
var tabButton = [button1, button2, button3];

//SPAN RESULTAT
var result1 = $('.result1');
var result2 = $('.result2');
var result3 = $('.result3');

//SPAN UNITE
var unit1 = $('.unit1');
var unit2 = $('.unit2');
var unit3 = $('.unit3');

//SELECT
var select1 = [$('#select1'), $('#select2')];
var select2 = [$('#select3'), $('#select4')];
var select3 = [$('#select5'), $('#select6')];

// FUNCTION
function calculer(e){
  var recupClassListButton =  e.target.classList[1]

  switch (recupClassListButton) {
    case 'button1':
        var valeur1 = document.getElementById('select1').value;
        var valeurInt1 = parseInt(valeur1);

        var valeur2 = document.getElementById('select2').value;
        var valeurInt2 = parseInt(valeur2);

        function calcul1(){
          var result;
          var ecart;
          volumeP = recupValeur('.volumeP');
          poidsV = recupValeur('.poidsV');
          if(volumeP > 0){
            if((valeurInt1 > valeurInt2) || (valeurInt1 < valeurInt2)){
              ecart = valeurInt1 - valeurInt2;
              result = volumeP * (Math.pow(10, (3+ecart)));
            }
            else{
              result = volumeP * 1000;
            }
          }
          else if (poidsV > 0){
            if(valeurInt1 > valeurInt2){
              ecart = valeurInt1 - valeurInt2;
              result = poidsV * (Math.pow(10, (3+ecart)));
            }
            else if (valeurInt1 < valeurInt2) {
              ecart = valeurInt1 - valeurInt2;
              result = poidsV / (Math.pow(10, (3+ecart)));
            }
            else if (valeurInt1 == valeurInt2) {
              result = poidsV / 1000;
            }
          }
          result = parseInt(result);
          result1.innerHTML = result.toFixed(3);
        }
        calcul1();
      break;
    case 'button2':

    var valeur3 = document.getElementById('select3').value;
    var valeurInt3 = parseInt(valeur3);

    var valeur4 = document.getElementById('select4').value;
    var valeurInt4 = parseInt(valeur4);

    function calcul2(){
      var result;
      var ecart;

      volume3P = recupValeur('.volume3P');
      poidsV3 = recupValeur('.poidsV3');

      if(volume3P > 0){
        if((valeurInt3 > valeurInt4) || (valeurInt3 < valeurInt4)){
          ecart = valeurInt3 - valeurInt4;
          result = volume3P * (Math.pow(10, (ecart)));
        }
        else{
          result = volume3P;
        }
      }
      else if (poidsV3 > 0) {
        if(valeurInt3 > valeurInt4){
          ecart = valeurInt3 - valeurInt4;
          result = poidsV3 / (Math.pow(10, (ecart)));
        }
        else if (valeurInt3 < valeurInt4) {
          ecart = valeurInt4 - valeurInt3;
          result = poidsV3 * (Math.pow(10, (ecart)));
        }
        else{
          result = poidsV3;
        }
      }
      result = parseInt(result);
      result2.innerHTML = result.toFixed(3);
    }
      calcul2();
      break;
    case 'button3':
    var valeur5 = document.getElementById('select5').value;
    var valeurInt5 = parseInt(valeur5);

    var valeur6 = document.getElementById('select6').value;
    var valeurInt6 = parseInt(valeur6);

    function calcul3(){
      var result;
      var ecart;

      volumeV3 = recupValeur('.volumeV3');
      v3Volume = recupValeur('.v3Volume');

      if(volumeV3 > 0){
        if((valeurInt5 > valeurInt6) || (valeurInt5 < valeurInt6)){
          ecart = valeurInt5 - valeurInt6;
          result = volumeV3 *(Math.pow(10, (ecart)));
        }
        else{
          result = volumeV3;
        }
      }
      else if (v3Volume > 0) {
        if((valeurInt6 > valeurInt5) || (valeurInt6 < valeurInt5)){
          ecart = valeurInt6 - valeurInt5;
          result = v3Volume * (Math.pow(10, (ecart)));
        }
        else{
          result = v3Volume;
        }
      }
      result = parseInt(result);
      result3.innerHTML = result.toFixed(3);
    }
    calcul3();
      break;
  }
}

function reset(){
  var reset = $('.buttonReset');
  reset.addEventListener('click', function resetInput(){
    result1.innerHTML = 0;
    result2.innerHTML = 0;
    result3.innerHTML = 0;
  })
}
// Fonction qui initialise les addEventListener
function lancement() {
  // On utiliser un forEach pour mettre la fonction calculer
  // a tous les boutons du tableau tabButton (ligne 17)

  // tableau = [ 1, 2, 3]
  //
  // tableau.forEach(element => {
  //  console.log(element) // 1 // 2 // 3
  //});

  tabButton.forEach(button =>{
    button.addEventListener('click', calculer);
  })
}

// Fonction init qui lance le programme
function init() {
  lancement()
  reset()
}

init();
