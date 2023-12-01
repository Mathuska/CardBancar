const inputName = document.querySelector("#card-name-input")
const cardName = document.querySelector("#card-name-text")
const divOwner = document.querySelector("#info-owner")

const writeCardName = () =>{
    const name = inputName.value.replace(/\s/g, ''); 

    if (name === "") {
      cardName.textContent = "Name"; 
  } else {
      cardName.textContent = name;
  }
  
   if (/\d/.test(name)) {
    inputName.classList.add("error")
}else{
    inputName.classList.remove("error")
}

};

inputName.addEventListener("input" ,writeCardName)

const addBorderName = () => {
divOwner.classList.add("border-name");
};
    
const removeBorderName = () => {
divOwner.classList.remove("border-name");
};
    
    
   
  inputName.addEventListener('focus' ,addBorderName)
    inputName.addEventListener('blur' ,removeBorderName)