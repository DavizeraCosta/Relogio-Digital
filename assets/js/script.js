function atualizarRelogio() {
    let agora = new Date();
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    document.getElementById("horas").textContent = horas.toString().padStart(2, '0');
    document.getElementById("minutos").textContent = minutos.toString().padStart(2, '0');
    document.getElementById("segundos").textContent = segundos.toString().padStart(2, '0');

    atualizarCenario(horas);
}

function atualizarCenario(horas) {
    let fundo = document.querySelector(".fundo");
    let solContainer = document.querySelector(".sol-container");
    let lua = document.querySelector(".lua");

    if (horas >= 6 && horas < 12) {
        fundo.style.background = "linear-gradient(to top, #FFD700, #FFA500)";
        solContainer.style.top = "15%";
        solContainer.style.opacity = "1";
        lua.style.opacity = "0";
    } else if (horas >= 12 && horas < 18) {
        fundo.style.background = "linear-gradient(to top, #87CEEB, #1E90FF)";
        solContainer.style.top = "40%";
        solContainer.style.opacity = "1";
        lua.style.opacity = "0";
    } else {
        fundo.style.background = "linear-gradient(to top, #2C3E50, #000000)";
        solContainer.style.opacity = "0";
        lua.style.opacity = "1";

        if (horas >= 18 && horas < 24) {
            lua.style.top = `${(24 - horas) * 10}%`; 
        } else {
            lua.style.top = `${(horas - 0) * 10}%`; 
        }
    }
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();
