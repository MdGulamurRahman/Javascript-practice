// problem:1------------


function  anaToVori(ana){
    var vori =ana/16;
    return vori;
}
var herana =144;
var vori = anaToVori(herana);
console.log(vori); 




// problem:2----------------

function pandaCost(shingaraQuantity,samosaQuantity,jilapiQuantity){
    const pershingara = 7;
    const persamosa = 10;
    const perjilapi = 15;

    // per item cost----------

    const shingaraCost = shingaraQuantity*pershingara;
    const samosaCost = samosaQuantity*persamosa;
    const jilapiCost = jilapiQuantity*perjilapi;

    const totalSnacksCost = shingaraCost+samosaCost+jilapiCost;

    return totalSnacksCost;


}
const snacks = pandaCost(5,5,5);
console.log(snacks);

// // // problem:3-----

function picnicBudget(members){
    var firstHundredMembers = 5000;
    var secondHundredMembers = 4000;
    var restMembers = 3000;

    if(members<=100){
        const payment = firstHundredMembers*members;
        return payment;
        
    }
    else if (members>100 && members <=200){
        const theFirstHundred = firstHundredMembers*100;
        const theRemaining = members-100;
        const theSecondHundred =theRemaining*secondHundredMembers;
        const totalMembers = theFirstHundred+theSecondHundred;
        return totalMembers;
    }
    else{
        const theFirstHundred = firstHundredMembers*100;
        const theSecondHundred = secondHundredMembers*100;
        const theRemaining = members-200;
        const remainingMembers = theRemaining*restMembers;
        const totalMembers = theFirstHundred+theSecondHundred+remainingMembers ;
        return totalMembers;
    }



}
const totalBudget = picnicBudget(250);
console.log(totalBudget);

// problem:4----------------------

const friendArray = ["asif", "munna", "atik", "zami", "raju", "shoyeb"];

function oddFriend(friendArray) {
  for (let i = 0; i < friendArray.length; i++) {
    if (friendArray[i].length % 2 != 0) {
      return friendArray[i];
    }
  }
}
const myFriend = oddFriend(friendArray);
console.log(myFriend);



function picnicBudget(member){
    const first100 =5000;
    const second100 = 4000;
    const restMembers = 3000;
    if(member <=100){
        const count = member * first100;
        return count;
    }
    else if(member > 100 && member <= 200){
        const firstDensity = 100 * first100;
        const restmember = member - 100;
        const secondDensity = restmember * second100;
        const totalCost = firstDensity + secondDensity;
        return totalCost;
    }
    else{
        const firstDensity = 100 * first100;
        const secondDensity = 100 * second100;
        const restmember = member - 200;
        const restDenceMember = restmember * restMembers;
        const total = firstDensity + secondDensity + restDenceMember;
        return total;
    }
}
// console.log(picnicBudget(250))