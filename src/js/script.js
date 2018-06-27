const balanceOutput = document.getElementById('balance');
const onePence = document.getElementById('1p');
const twoPence = document.getElementById('2p');
const fivePence = document.getElementById('5p');
const tenPence = document.getElementById('10p');
const twentyPence = document.getElementById('20p');
const fiftyPence = document.getElementById('50p');
const onePound = document.getElementById('1pound');
const twoPounds = document.getElementById('2pound');


function getCoins(){
    fetch('https://coin-counter.herokuapp.com/api/coins')
    .then((res) => res.json())
    .then((data) => {
        var worth = 0
        for(i = 0; i < data.length; i++){
            worth += data[i].worth * data[i].amount;
        }
        var coinstar = worth - (worth * 0.119);
        var coinstarRound = coinstar.toFixed(2);
        balanceOutput.innerHTML += `<p>£${worth}</p>`;
        balanceOutput.innerHTML += `<p>Coinstar Value: £${coinstarRound}</p>`;
        onePence.innerHTML += `<p>1p | Amount: ${data[0].amount} , Worth: £${data[0].amount * data[0].worth}</p>`
        twoPence.innerHTML += `<p>2p | Amount: ${data[1].amount} , Worth: £${data[1].amount * data[1].worth}</p>`
        fivePence.innerHTML += `<p>5p | Amount: ${data[2].amount} , Worth: £${data[2].amount * data[2].worth}</p>`
        tenPence.innerHTML += `<p>10p | Amount: ${data[3].amount} , Worth: £${(data[3].amount * data[3].worth).toFixed(2)}</p>`
        twentyPence.innerHTML += `<p>20p | Amount: ${data[4].amount} , Worth: £${(data[4].amount * data[4].worth).toFixed(2)}</p>`
        fiftyPence.innerHTML += `<p>50p | Amount: ${data[5].amount} , Worth: £${data[5].amount * data[5].worth}</p>`
        onePound.innerHTML += `<p>£1 | Amount: ${data[6].amount} , Worth: £${data[6].amount * data[6].worth}</p>`
        twoPounds.innerHTML += `<p>£2 | Amount: ${data[7].amount} , Worth: £${data[7].amount * data[7].worth}</p>`
        //Change colour if amount is enough to give to bank
        if(data[0].worth * data[0].amount + data[1].worth * data[1].amount  >= 1){
          onePence.classList.add("coinOutputs--green");
          twoPence.classList.add("coinOutputs--green");
        }
        if(data[2].worth * data[2].amount >= 5){
          fivePence.classList.add("coinOutputs--green");
        }
        if(data[3].worth * data[3].amount >= 5){
          tenPence.classList.add("coinOutputs--green");
        }
        if(data[4].worth * data[4].amount>= 10){
          twentyPence.classList.add("coinOutputs--green");
        }
        if(data[5].worth * data[5].amount >= 10){
          fiftyPence.classList.add("coinOutputs--green");
        }
        if(data[6].worth * data[6].amount >= 20){
          onePound.classList.add("coinOutputs--green");
        }
        if(data[7].worth * data[7].amount >= 20){
          twoPounds.classList.add("coinOutputs--green");
        }
    })
}
getCoins();