let day = 0
let recapWork=document.querySelector(".recapwork")


document.getElementById('calculateButton').addEventListener('click', function() {
    day++

    // si le même jour 

    let startTime = document.getElementById('startTime').value;
    let endTime = document.getElementById('endTime').value;

    let start = new Date('2024-02-05T' + startTime + ':00');
    let end = new Date('2024-02-05T' + endTime + ':00');

    let difference = end - start;
    let hours = Math.floor(difference / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));


    // injecter dans l'html

    document.getElementById('result').innerHTML = `Total work time: ${hours} hours ${minutes}`
    recapWork.innerHTML+=`
    <p>Jour ${day} : ${hours} heures et ${minutes}</p>
    `
    // ******************************************************
    // si travail de nuit, sur deux jours

    // calculer millisecondes écoulées entre start day et end day pcq j'avais un NaN en résultat (peut-être calcule pas précis dans la conversion totalHours et totalMinutes)
    let differenceNight = end.getTime() - start.getTime();

    if(end < start){
    // ajouter la durée (trouvé sur internet) d'une journée à la différence
    differenceNight += 24 * 60 * 60 * 1000;
    }

    // Convertir la différence de temps totale en heures et minutes, j'ai du le mettre en dehors de la condition pour que ça fonctionne (car j'utilise le résultat du calcul ?)
    let totalHours = Math.floor(differenceNight / (1000 * 60 * 60));
    let totalMinutes = Math.floor((differenceNight % (1000 * 60 * 60)) / (1000 * 60));

    // !!!!!!injecter dans l'html : pas reussi à metttre les deux!!!!!!

    // document.getElementById('result').innerHTML = `Total work time: ${totalHours} hours ${totalMinutes}`
    // recapWork.innerHTML+=`
    // <p>Jour ${day} : ${totalHours} heures et ${totalMinutes}</p>
    // `

    // si les champs sont vides 

    if(endTime === "" && startTime === ""){

    // injecter dans l'html

    document.getElementById('result').style.display = `none`
    recapWork.innerHTML=`Il s'emblerait que vous n'avez pas rentré vos heures de travail ou qu'une donnée soit manquante`

    }

    

})

// !!!!!!!! pas reussi à remettre les champs vide!!!!!!!!
startTime = ""
endTime = ""

// à faire :

// si travail nuit ne pas faire le calcul hours & minutes dan sle recap

// ******************************************************

document.addEventListener("DOMContentLoaded",function(){

    let modal = document.getElementById('modal');

    document.getElementById('linkModal').addEventListener('click',function(){
        modal.classList.remove('offmodal');
        modal.classList.add('onmodal');

    },false)

    document.querySelector('.close').addEventListener('click',function(){
        modal.classList.remove('onmodal');
        modal.classList.add('offmodal');
    },false)


});


