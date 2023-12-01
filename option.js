const selectMonth = document.getElementById("month-of-expiration");
const selectYear = document.getElementById("year-of-expiration");
const cardExpire = document.querySelector("#expire-card")

const months = [
    "01", "02", "03", "04", "05", "06",
    "07", "08", "09", "10", "11", "12"
];

for (let i = 0; i < months.length; i++) {
   let option = document.createElement("option");
    option.text = months[i];
    option.value = months[i];
    selectMonth.add(option)
}

    let currentYear = new Date().getFullYear();
   
    for (var i = 0; i < 10; i++) {
        let option = document.createElement("option");
        let year = currentYear + i;
        option.text = year;
        option.value = year;
        selectYear.add(option);
    }

const addMonth = () => {
    let currentText = cardExpire.textContent;
    let month = selectMonth.value;

    if (currentText.length >= 2) {
       
        let updatedText = month + currentText.slice(2);
        cardExpire.textContent = updatedText;
    }
};

const addYear = () =>{
    let currentText = cardExpire.textContent;
    let year = selectYear.value;

    if (currentText.length >= 4) {
        
        let updatedText = currentText.slice(0,3) + year;
        cardExpire.textContent = updatedText; 
    }
};

selectYear.addEventListener("change" , addYear)
selectMonth.addEventListener("change" , addMonth)
 

