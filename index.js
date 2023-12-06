const visa = document.querySelector("#visa-img");
const master = document.querySelector("#master-img");
const discover = document.querySelector("#discover-img");

let currentImage = 1 ;
for (let i = 0; i < currentImage; i++) {
setInterval(() => {
   switch (currentImage) {
        case 1:
            visa.classList.remove("logo-img");
            discover.classList.add("logo-img");
            master.classList.add("logo-img");
            currentImage++
            break;
        case 2:
            visa.classList.add("logo-img");
            discover.classList.add("logo-img");
            master.classList.remove("logo-img");
            currentImage++
            break;
        case 3:
            visa.classList.add("logo-img");
            discover.classList.remove("logo-img");
            master.classList.add("logo-img");
            currentImage = 1;
            break;
        }
}, 5000);  
} 




