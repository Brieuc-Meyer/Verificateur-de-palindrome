//Brieuc Meyer
//Version 1
//Ressources : .replace appris grace à : https://www.youtube.com/watch?v=ZYPqPoijCAQ&ab_channel=dcode


function NettoyageAccent(chaine, accent) {
    chaine = chaine.toLowerCase();
    //.split transforme la chaine de caractère en tableau
    chaine=chaine.split('')
    //cette boucle teste chaque accent présent dans le tableau ligne 36:
    for (let t = 0; t < accent.length; t++) {
        //et cette boucle imbriquée parcours la chaine de caractère pour retrouver une correspondance avec la valeur traitée dans la première boucle
        for (let i = 0; i < chaine.length; i++) {
            //si il y à correspondance la lettre sera remplacé par le premier caractère du tableau L 36 qui est un charactère standard
            if (chaine[i] == accent[t]) {
                chaine[i] = accent[0]
            }
        }

    }
    //.join la retransforme en chaine de caractère
    chaine=chaine.join('')
    console.log(accent[0])
    console.log(chaine)
    return chaine

}

//cette foction est appelé par la page HTML et recupère la chaine de caractère
function maFonctionPalindrome() {
    let reponse = ""
    let chaine = document.getElementById("Chaine").value
    let chaineInverse = ""
    let place = document.getElementById("place")

    chaine = chaine.toLowerCase()
    // et la nettoie en appelant la fonction NettoyageAccent ci dessus
    tousAccents = ["eéèëê", "aàäâà", "iîï", "cç", "oöô"]
    for (let x = 0; x < tousAccents.length; x++) {
        chaine = NettoyageAccent(chaine, tousAccents[x])
    }
    
    chaine=chaine.replace(/[,.;:' ]/g, "")
    console.log(chaine)


    //Cette boucle prend le dernier caractère de la chaine standardisée et le place en premier dans une nouvelle variable ce qui inverse la chaine
    for (let i = chaine.length - 1; i >= 0; i--) {
        chaineInverse = chaineInverse + chaine[i]
        console.log(chaineInverse)
    }
    //ces conditions testent la validitée du palindrome en comparant les deux chaines
    if (chaine == chaineInverse) {
        reponse = "<vert>"+reponse + "ce mot est un Palindrome"+"</vert>"
    }

    else {
        reponse = reponse + "<rouge>"+"ce mot n'est pas un Palindrome"+"</rouge>"
    }
    place.innerHTML = reponse
}


