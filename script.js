
function calcolaFFMI(){

    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);
    let bf = Number(document.getElementById("bf").value);

    if(!weight || !height || ! bf){
        document.getElementById("result").innerHTML = "TRY AGAIN!";
        return;
    }

    let cleanWeight = weight * (1 - bf/100);
    let ffmi = cleanWeight / Math.pow(height/100, 2);
    
    document.getElementById("result").innerHTML = `FFMI: ${ffmi.toFixed(2)}`;
}