
```javascript
if(!localStorage.fc){ localStorage.fc = 500 }
if(!localStorage.spins){ localStorage.spins = 3 }

function addFC(amount){
  localStorage.fc = Number(localStorage.fc) + amount
}

function spendSpin(){
  if(Number(localStorage.spins) > 0){
    localStorage.spins = Number(localStorage.spins) - 1
    return true
  }
  return false
}

function bonusSpins(){
  localStorage.spins = Number(localStorage.spins) + 3
}

function convertFCToCedis(fc){
  return (fc / 10000).toFixed(2)
}
```