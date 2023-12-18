const inputNumber = document.querySelector("#card-number-input");
const numberCard = document.querySelector("#card-number-text");
let lastNumberCardValue = "#### #### #### ####";



//hell[]


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
    console.log(formattedValue);
    let lengtOfNumber = 38 - formattedValue.length
    let lengtOfNumberCard =  lastNumberCardValue.slice(formattedValue.length,lengtOfNumber)

numberCard.textContent = inputValue !== '' ? formattedValue + lengtOfNumberCard : lastNumberCardValue;

};


const addBorder = () => {
numberCard.classList.add("border-name")
};

const removeBorder = () => {
numberCard.classList.remove("border-name")
};


inputNumber.addEventListener('input',validCardNumber)
inputNumber.addEventListener('focus',addBorder)
inputNumber.addEventListener('blur',removeBorder)
   