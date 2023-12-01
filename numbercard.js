const inputNumber = document.querySelector("#card-number-input");
const numberCard = document.querySelector("#card-number-text");


const validCardNumber = () => {
    const inputValue = inputNumber.value.replace(/\s/g, ''); 
    
    if (!/^\d+$/.test(inputValue)) {
        inputNumber.classList.add("error")
    }else{
        inputNumber.classList.remove("error")
    }
    
    let formattedValue = '';
    
    for (let i = 0; i < inputValue.length; i++) {

        if (i > 0 && i % 4 === 0) {
            formattedValue += ' ';  
        }
        formattedValue += inputValue[i];
        
    }
  inputNumber.value = formattedValue;

  numberCard.textContent = inputValue !== '' ? formattedValue : lastNumberCardValue;
    lastNumberCardValue = numberCard.textContent;
};

inputNumber.addEventListener('input',validCardNumber)
   