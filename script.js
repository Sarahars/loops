var st1 = {
    name: "Adel",
    nat: "DZ",
    score: 11
};
var st2 = {
    name : "Alex",
    nat : "USA",
    score : 13
};
var st3 = {
    name : "Steve",
    nat : "UK",
    score : 09
};
var st4 = {
    name : "Sidali",
    nat : "DZ",
    score : 18
};
var st5 = {
    name : "Hamza",
    nat : "TN",
    score : 19
};
var st6 = {
    name : "Redouane",
    nat : "DZ",
    score : 05
};
var studentList = [st1, st2, st3, st4, st5, st6];
console.table(studentList);


/* afficher all winners , DZ winners and DZ losers mais cette
 fonction ne permet pas d'affiche dz winners deux fois
(avec les DZ et avec all winners)*/ 
function calculAvrage(list){
    var sum = 0;
    var winnerDZList = [];
    var loserList = [];
    var winnerList = []
    for (var i = 0; i< list.length; i=i+1){
        sum = sum + list[i].score;
        if(list[i].score >= 10){
            winnerList.push(list[i])
            
        }
        else if(list[i].nat === "DZ" && list[i].score < 10){
            var st = {
                 fullName: list[i].name,
                 nationality: list[i].nat
                 }
        loserList.push(st)
}else if (list[i].nat === "DZ" && list[i].score >= 10){
    winnerDZList.push(list[i])
}
            
        
    }
    var moyen = sum/list.length
    return {
        moy : moyen,
        winners : winnerList,
        losers : loserList,
        winnerDZ : winnerDZList
    }
}
var result = calculAvrage(studentList);
// console.table(result);
console.table(result);

// Switch (non terminé)

function moyenne(list2){
    var admisList = [];
    var ajournéList = [];
    
    switch (list2[i].score){
        case (score >= 10) :
            admisList.push(list2[i])
            break;
        case (score< 10) :
            ajournéList.push(list2[i])
            break;
    }

}
var rslt = {
    admis: admisList,
    ajourné: ajournéList
}
moyenne(studentList)