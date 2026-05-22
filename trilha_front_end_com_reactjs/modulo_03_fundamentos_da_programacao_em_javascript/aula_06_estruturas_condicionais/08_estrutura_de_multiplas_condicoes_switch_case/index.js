const clima = "chuva";

switch(clima) {
    case "sol": 
        console.log("Está ensolarado. Aproveite o dia!");
        break;
    case "chuva": 
        console.log("Está chovendo. Não esqueça o guarda-chuva!");
        break;
    case "nublado": 
        console.log("Está nublado. O tempo pode mudar a qualquer momento!");
        break;
    default: 
        console.log("Clima desconhecido! Verifique a previsão");
}