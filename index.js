let cookie = document.querySelector(".cookie");

function mensaje() {
    alert("Loading weather report...");
}


let temperatures = document.querySelectorAll('.temperature');
let temperatureSelector=document.querySelector('#temperatureSelect');
temperatureSelector.addEventListener('change',cambiarTemperaturas);

function cambiarTemperaturas(event){
    let temperatureOption =event.target.value;

    if(temperatureOption==="F"){
        for(let i=0;i<temperatures.length;i++){
            let convertedTemperature = (parseFloat(temperatures[i].innerText) * 9/5) + 32;
            temperatures[i].innerText = convertedTemperature.toFixed(0)+"°";
        }
    }
    else{
        for(let i=0;i<temperatures.length;i++){
            let convertedTemperature = (parseFloat(temperatures[i].innerText) - 32) * 9/5;
            temperatures[i].innerText = convertedTemperature.toFixed(0)+"°";
        }
    }

}




function closeCookie(){
    cookie.remove();
}