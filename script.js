function calculateYearsUntilRetirement(event){
    const currentAge = event.target.value;
    const yearsLeft = 65 - currentAge;
    alert(yearsLeft)

}

function getGreetingInFrench(event){
    const greeting = event.taget.value;

    if (greeting == 'hello'){
    alert('bonjour')
    }
    else if (greeting == 'goodbye'){
    alert (greeting == 'Au revior')
    } else {
        alert('not recognised')
    }    
}

function goalsToWin(event){
    const currentgoals = event.taget.value
    
    if (goals == '50' )
    alert('You Won')
}


function getGreetingInSpanish(event){
    const greeting =event.target.value
}

if (greeting == 'Hello')
alert ('Hola')