let xhr;
let endPoint = "http://worldtimeapi.org/api/timezone/Asia/Kolkata";

function connect(){
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = processResponse;
    xhr.open("get",endPoint,true);
    xhr.send(null);
}
function processResponse(){
    if(xhr.readyState === 4 && xhr.status === 200){
        let jsonStr = xhr.responseText;
        let obj = JSON.parse(jsonStr);
        let dateTime = obj.datetime;
        let today = new Date(dateTime);
        let response = today.toDateString()+","+today.toLocaleTimeString();
        let span = document.getElementById("currentdatetime");
        span.innerHTML = response;
    }else if(xhr.readyState === 4 && xhr.status !== 200){
        alert("Error: \n"+xhr.statusText);
    }
}