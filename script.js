// If a name, is a coaches name, log "It's a coach"

// const name = "ollie";
// console.log("Its a coach")

// // If greeting, Bonjour, log "comment ca va"

// const greeting = "Bonjour";
// if (greeting == "Bonjour") ;
// console.log("comment ca va") 

// // If a score reaches 10, log "you won the game"

// const score = 10;
// if (score == 10);
// console.log("you won the game")

// // If age is greater than 65, log "time to retire"
// var age = age > 65;
// if (age => 65);
// console.log("time to retire") 

// // If hasCovid, log "time to isolate", else "keep social distancing"
// // var hasCovid = console.log("time to isolate")
// // var doesntHaveCovid = console.log("keep social distancing")
// if (hasCovid = true) {
//     console.log('time to isolate')
// } else (hasCovid = false); {
//     console.log("keep social distancing")
// }

// // If age, greater than 18, and is Britsh, log "you can vote in the next election"
// if (age => 18 && "is British"){
//     console.log("you can vote in the next election")
// }

// if your hungry, log "eat cookie" else 'dont eat cookie
// if (hungry = true){
//     console.log("eat the cookie")
// } if  (hungry = false);
//     console.log("dont eat cookie")


// if (taste = true){
//     console.log("Please enjoy")
// }
function calculateYearsUntilRetirement(event){
    const currentAge = event.target.value;
    const yearsLeft =  65 - currentAge;  
    alert(yearsLeft)
}

function GetGreetingInFrench(event){
    const greeting = event.target.value;

    if (greeting == "hello"){
    alert("bonjour")
    } else if (greeting == "how are you"){
    alert("comment ca va")
    } else {
    alert("word not recognised")
    }
}


function LearnSpanishBaby(event){
    const learn = event.target.value;

    if (learn == "hello"){
        alert("hola")
    } else if (learn == "how are you"){
        alert("cómo estás")
    } if (learn == "no way"){
        alert("de ninguna manera")
    } else alert("Lee mas")

}