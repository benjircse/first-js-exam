problem - 1 solve

function anaToVori(ana) {
    let vori = ana / 16;
    return vori;
}

var vori = anaToVori(48);
console.log(vori);




problem - 2 solve

function pandaCost(singaraNum, somossaNum, zilapiNum) {
    let singaraPraice = 7;
    let somossaaPraice = 10;
    let zilapiPraice = 15;
    let singaraQuntity = singaraNum * singaraPraice;
    let somossaQuntity = somossaNum * somossaaPraice;
    let zilapiQuntity = zilapiNum * zilapiPraice;
    return singaraQuntity + somossaQuntity + zilapiQuntity;
}

let singaraSomossaZilaoi = pandaCost(3, 2, 2);
document.write(singaraSomossaZilaoi);

// problem -3 solve

function picnicBudget(total) {
    var sum = 0;
    for (i = 1; i <= total; i++) {
        if (i <= 100) {
            sum += 5000
        } else if (i > 100 && i <= 200) {
            sum += 4000
        } else {
            sum += 3000
        }

    }
    return sum;
}
var result = picnicBudget(201)
console.log(result);

problem - 4 solve


function oddFriend(name) {
    let myFriend = [];
    for (let i = 0; i < name.length; i++) {
        let friend = name[i].length;
        if (friend % 2 != 0) {
            return name[i]
        }
    }

}

console.log(oddFriend(["vadori", "Aliya", "Daliya", "Koliya", "Moliya", "Soliya", "Vaduya"]))
