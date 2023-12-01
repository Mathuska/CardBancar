const inputName = document.querySelector("#card-name-input")
const cardName = document.querySelector("#card-name-text")

const writeCardName = () =>{
    const name = inputName.value.replace(/\s/g, ''); 
   cardName.textContent = name
   if (/\d/.test(name)) {
    inputName.classList.add("error")
}else{
    inputName.classList.remove("error")
}

};

inputName.addEventListener("input" ,writeCardName)