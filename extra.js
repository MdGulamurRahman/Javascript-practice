let win = 0;
let lost = 0;
for(let i =1; i <= 5; i++){
    const guessing = parseInt(prompt("enter your guessing number"));
    const randomNum = Math.floor(Math.random()*5) + 1;

    if(guessing === randomNum){
        console.log("you have won");
        win++;
    }else{
        console.log("you have lost", randomNum);
        lost++;
    }
}
document.write("you have win number of = ", win, "</br>")
document.write("you have lost number of = ", lost)

