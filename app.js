let premierNombre, deuxiemeNombre, nbreReponse, valider, vraiPremierNombre, vraiDeuxiemeNombre, span, score1, score,
    correcte, container, bloc, valeurScore, recommence;
window.onload = () => {
    premierNombre = document.querySelector('.premierNombre');
    deuxiemeNombre = document.querySelector('.deuxiemeNombre');
    nbreReponse = document.querySelector('#nbre');
    valider = document.querySelector('.btn');
    span = document.getElementsByTagName('span');
    score = document.querySelector('.score');
    correcte = document.querySelector('.correcte');
    bloc = document.querySelector('.bloc');
    valeurScore = document.querySelector('.valeurScore');
    recommence = document.querySelector('.recommencer');

    score1 = 0;
    nbreReponse.style.color = '#fff';

    premierNombre = Math.random()*100;
    vraiPremierNombre = Math.round(premierNombre);
    span[0].innerHTML =  `${vraiPremierNombre}`;

    deuxiemeNombre = Math.random()*100;
    vraiDeuxiemeNombre = Math.round(deuxiemeNombre);
    span[2].innerHTML =   `${vraiDeuxiemeNombre} `;

    valider.addEventListener('click', calcul);

    function calcul() {
                 
                let resultat = vraiPremierNombre + vraiDeuxiemeNombre;
       
        if(nbreReponse.value == resultat) {
                nbreReponse.value = '' 
                score1++; 
              
                correcte.style.display = 'block';
                correcte.style.backgroundColor = 'green';
                    
                premierNombre = Math.random()*100;
                vraiPremierNombre = Math.round(premierNombre);
                span[0].innerHTML =  `${vraiPremierNombre}`;
            
                deuxiemeNombre = Math.random()*100;
                vraiDeuxiemeNombre = Math.round(deuxiemeNombre);
                span[2].innerHTML =   `${vraiDeuxiemeNombre} `;
        
        } else {               
                   correcte.style.backgroundColor = 'red';
                   correcte.innerHTML = 'Vous avez perdu !';
                   bloc.innerHTML = ' ';
                   valeurScore.innerHTML = score1; 
                   valeurScore.style.fontSize = '60px';
                   valeurScore.style.fontWeight = 'bold';
                   valeurScore.style.marginBottom = '10px';
                   score.innerHTML = 'Score';
                   recommence.style.display = 'block';
        }
    }

}


