let infoBox = document.getElementById('infoBox');

//La funzione checkPalindrome() prende il valore string dal form (anche se esso è composto da numeri). Se l'input non è valido ignora la funzione.

function checkPalindrome(){
    let stringToCheck = document.getElementById('inputWord').value;

    if(stringToCheck.trim() === ""){
        infoBox.innerHTML = "Input parola non valido.";
        return false;
    }

    //Usiamo il metodo [...argomento] per costruire un array di controllo costituito dai singoli caratteri della stringa analizzata.
    //Usiamo lo stesso metodo per un secondo array di controllo, ma questa volta utilizziamo reverse() per invertire l'ordine dei caratteri.
    //La funzione reverse() inverte l'array su cui viene eseguita, quindi per mantenere il primo array di controllo dobbiamo crearne
    //uno da zero a partire dall'array esistente.

    const arrayWord = [...stringToCheck];
    const arrayCheck = [...arrayWord].reverse();

    //console.log(arrayWord);
    //console.log(arrayCheck);

    //Controlliamo se gli elementi nello stesso index dei due array sono uguali. Un palindromo al contrario è esattamente uguale alla
    //parola originale. Se trova un elemento non uguale, la parola non è palindroma; aggiorna l'infoBox e interrompe subito la funzione.

    for(i=0; i<arrayWord.length; i++){

        if(arrayWord[i] !== arrayCheck[i]){
            infoBox.innerHTML = "La parola non è palindroma.";
            return false;
        }
    }

    //Se la funzione non ha trovato elementi fuori posto, allora la parola è palindroma e diamo semplicemente un messaggio di conferma
    //tramite infoBox.

    infoBox.innerHTML = "La parola è palindroma!";
}

//La funzione playEven() prende il numero inserito dall'utente e randomizza quello del computer. Entrambi i numeri sono compresi tra 1 e 5.
//I numeri vengono poi sommati, e se la loro somma è pari, l'utente ha vinto.

function playEven(){

    //Prendiamo il valore inserito dall'utente.
    //SANITY CHECK: se l'elemento inserito non è un numero, o non è compreso tra 1 e 5, l'input viene considerato invalido e termina la funzione
    //con un messaggio di errore.

    let numPlayer = document.getElementById('inputNumber').value;
    numPlayer = parseInt(numPlayer);

    if(isNaN(numPlayer) || numPlayer < 1 || numPlayer > 5){
        infoBox.innerHTML = "Numero inserito non valido.";
        return false;
    }

    let numCPU = (Math.floor(Math.random() * 5)) + 1;

    //console.log(numPlayer);
    //console.log(numCPU);

    //Sommiamo i due numeri.

    let numResult = numPlayer + numCPU;

    //Banale if condizionale per determinare se il numero è pari o dispari, aggiornando alla fine il messaggio apposito.

    if(numResult%2 === 0){
        infoBox.innerHTML = "La somma del risultato, " + numResult + ", è pari. Hai vinto!";
    } else {
        infoBox.innerHTML = "La somma del risultato, " + numResult + ", è dispari. Hai perso.";
    }
}

//La funzione playOdd() funziona allo stesso modo della funzione precedente; diamo un messaggio di vittoria se la somma è dispari.

function playOdd(){

    let numPlayer = document.getElementById('inputNumber').value;
    numPlayer = parseInt(numPlayer);

    if(isNaN(numPlayer) || numPlayer < 1 || numPlayer > 5){
        infoBox.innerHTML = "Numero inserito non valido.";
        return false;
    }

    let numCPU = (Math.floor(Math.random() * 5)) + 1;

    //console.log(numPlayer);
    //console.log(numCPU);

    let numResult = numPlayer + numCPU;

    if(numResult%2 === 0){
        infoBox.innerHTML = "La somma del risultato, " + numResult + ", è pari. Hai perso.";
    } else {
        infoBox.innerHTML = "La somma del risultato, " + numResult + ", è dispari. Hai vinto!";
    }
}