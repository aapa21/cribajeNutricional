//The main values
const leucocitos = document.getElementById("leucocitos");
const linfocitos = document.getElementById("linfocitos");
const colesterol = document.getElementById("colesterol");
const albumina = document.getElementById("albumina");
const form = document.getElementById("main-data");
const hemoglobina = document.getElementById("hemoglobina");
const plaquetas = document.getElementById("plaquetas");
const glicemia = document.getElementById("glicemia");
const urea = document.getElementById("urea");
const creatinina = document.getElementById("creatinina");
const trigliceridos = document.getElementById("trigliceridos")
let cont1 = 0;
let cont2 = 0;
let cont3 = 0;
let sumCont = 0;

//Albumina
const albuminaDiv = document.getElementById("albumina-div");
const albuminaResult = document.createElement("h4");
const albuminaResultDiv = document.createElement("div");
albuminaResult.classList.add("new-result")

//linfocitos
const linfocitosDiv = document.getElementById("linfocitos-div");
const linfocitosResult = document.createElement("h4");
const linfocitosResultDiv = document.createElement("div");
linfocitosResult.classList.add("new-result")

//colesterol
const colesterolDiv = document.getElementById("colesterol-div");
const colesterolResult = document.createElement("h4");
const colesterolResultDiv = document.createElement("div");
colesterolResult.classList.add("new-result");

//puntaje total
const puntajeTotalDiv = document.getElementById("puntaje-total-div");
const puntajeTotalResult = document.createElement("h4");
const puntajeTotalResultDiv = document.createElement("div");
puntajeTotalResult.classList.add("new-result");

//grado de alerta nutricional
const alertaNutricionalDiv = document.getElementById("alerta-nutricional-div");
const alertaNutricionalResult = document.createElement("h4");
const alertaNutricionalResultDiv = document.createElement("div");
alertaNutricionalResult.classList.add("new-result");

//Creating the main event listener
form.addEventListener("submit", e => {
    e.preventDefault();

    //getting the values
    let leucocitosValue = leucocitos.value;
    let linfocitosValue = linfocitos.value;
    const colesterolValue = colesterol.value;
    const albuminaValue = albumina.value;

    const linfocitosTotales = (leucocitosValue * 1000) * linfocitosValue/100;

    //linfocitos conditionals 
    if(linfocitosTotales >=1600){
        cont1 = 0;
        linfocitosResult.innerText = cont1 + " puntos";
        linfocitosResultDiv.appendChild(linfocitosResult);
        linfocitosDiv.appendChild(linfocitosResultDiv);

    }
    else if((linfocitosTotales >=1200)&&(linfocitosTotales <=1599)){
        cont1 = 1;
        linfocitosResult.innerText = cont1 + " puntos";
        linfocitosResultDiv.appendChild(linfocitosResult);
        linfocitosDiv.appendChild(linfocitosResultDiv);
    }
    else if((linfocitosTotales >=800)&&(linfocitosTotales <= 1199)){
        cont1 = 2;
        linfocitosResult.innerText = cont1 + " puntos";
        linfocitosResultDiv.appendChild(linfocitosResult);
        linfocitosDiv.appendChild(linfocitosResultDiv);
    }
    else {
        cont1 = 3;
        linfocitosResult.innerText = cont1 + " puntos";
        linfocitosResultDiv.appendChild(linfocitosResult);
        linfocitosDiv.appendChild(linfocitosResultDiv);
    }

    //albumina conditionals
    if(albuminaValue >= 3.50){
        cont2 = 0;
        albuminaResult.innerText = cont2 + " puntos";
        albuminaResultDiv.appendChild(albuminaResult);
        albuminaDiv.appendChild(albuminaResultDiv);
    }
    else if((albuminaValue >=3.00)&&(albuminaValue <=3.49)){
        cont2 = 2;
        albuminaResult.innerText = cont2 + " puntos";
        albuminaResultDiv.appendChild(albuminaResult);
        albuminaDiv.appendChild(albuminaResultDiv);
    }
    else if((albuminaValue >=2.50)&&(albuminaValue <=2.99)){
        cont2 = 4;
        albuminaResult.innerText = cont2 + " puntos";
        albuminaResultDiv.appendChild(albuminaResult);
        albuminaDiv.appendChild(albuminaResultDiv);
    }
    else{
        cont2 = 6;
        albuminaResult.innerText = cont2 + " puntos";
        albuminaResultDiv.appendChild(albuminaResult);
        albuminaDiv.appendChild(albuminaResultDiv);
    }

    //colesterol conditionals
    if(colesterolValue >=180){
        cont3 = 0;
        colesterolResult.innerText = cont3 + " puntos";
        colesterolResultDiv.appendChild(colesterolResult);
        colesterolDiv.appendChild(colesterolResultDiv);
    }
    else if((colesterolValue>=140)&&(colesterolValue<=179)){
        cont3 = 1;
        colesterolResult.innerText = cont3 + " puntos";
        colesterolResultDiv.appendChild(colesterolResult);
        colesterolDiv.appendChild(colesterolResultDiv);
    }
    else if((colesterolValue>=100)&&(colesterolValue<=139)){
        cont3 = 2;
        colesterolResult.innerText = cont3 + " puntos";
        colesterolResultDiv.appendChild(colesterolResult);
        colesterolDiv.appendChild(colesterolResultDiv);
    }
    else{
        cont3 = 3;
        colesterolResult.innerText = cont3 + " puntos";
        colesterolResultDiv.appendChild(colesterolResult);
        colesterolDiv.appendChild(colesterolResultDiv);
    }
    
    //Puntaje total
    sumCont = cont1 + cont2 + cont3;
    puntajeTotalResult.innerText = sumCont + " puntos";
    puntajeTotalResultDiv.appendChild(puntajeTotalResult);
    puntajeTotalDiv.appendChild(puntajeTotalResultDiv);

    //grado de alerta nutricional
    if((sumCont == 0)&&(sumCont <=4)){
        alertaNutricionalResult.innerText = "Baja";
        alertaNutricionalResultDiv.appendChild(alertaNutricionalResult);
        alertaNutricionalDiv.appendChild(alertaNutricionalResultDiv);
    }
    else if((sumCont >=5)&&(sumCont<=8)){
        alertaNutricionalResult.innerText = "Moderada";
        alertaNutricionalResultDiv.appendChild(alertaNutricionalResult);
        alertaNutricionalDiv.appendChild(alertaNutricionalResultDiv);
    }
    else if((sumCont >= 9)&&(sumCont<=12)){
        alertaNutricionalResult.innerText = "Alta";
        alertaNutricionalResultDiv.appendChild(alertaNutricionalResult);
        alertaNutricionalDiv.appendChild(alertaNutricionalResultDiv);
    }

    //clearing the values
    leucocitos.value = "";
    linfocitos.value = "";
    colesterol.value = "";
    albumina.value = "";
    hemoglobina.value = "";
    plaquetas.value = "";
    glicemia.value = "";
    urea.value = "";
    creatinina.value = "";
    trigliceridos.value = "";

})

//Do you want to exit the website?
function exitWebpage(){
    return "¿Seguro que deseas salir del sitio web?"
}

window.onbeforeunload = exitWebpage;
