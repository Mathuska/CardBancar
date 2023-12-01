const cvvInput = document.querySelector("#cvv")
const cvvText = document.querySelector("#cvv-card")
const frontCard = document.querySelector('#card-bancar-front');
const backCard = document.querySelector('#card-bancar-back');
const cardFlip = document.querySelector("#flip")

const addCvv = () =>{

    const number = cvvInput.value.replace(/\s/g, ''); 
  cvvText.textContent = number
   if (!/^\d+$/.test(number)) {
    cvvInput.classList.add("error")
}else{
    cvvInput.classList.remove("error")
}
};

const  rotateCard = () => {
    cardFlip.classList.add('flip');
    
}
const inverseCard = () => {
    cardFlip.classList.remove('flip');
    
}

cvvInput.addEventListener("input",addCvv)
cvvInput.addEventListener("focus",rotateCard)
cvvInput.addEventListener("blur",inverseCard)

