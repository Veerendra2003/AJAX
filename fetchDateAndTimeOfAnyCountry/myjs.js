let xhr;
let select;
let endPoint = "http://worldtimeapi.org/api/timezone";
let timeZoneName;
function loadTimeZones(){
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = processResponse;
    xhr.open('GET',endPoint,true);
    xhr.send(null);
}

function processResponse(){
    if(xhr.readyState === 4 && xhr.status === 200){
        let jsonStr = xhr.responseText;
        let contriesAll = JSON.parse(jsonStr);
        select = document.getElementById('countries');
        for(let country of contriesAll){
            select.innerHTML+=`<option>${country}</option>`;
        }
    }
    else if(xhr.readyState ===4 && xhr.status !==200){
        console.log("Problem in Connections");
    }
}
function showData(){
    timeZoneName = select.value;
    let endPoint2 = endPoint+"/"+timeZoneName;
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = processTime;
    xhr.open('GET',endPoint2,true);
    xhr.send(null);
}
function processTime(){
    if(xhr.readyState === 4 && xhr.status === 200){
        let jsonStr = xhr.responseText;
        let obj = JSON.parse(jsonStr);
        let dateTime = obj.datetime;
        // console.log(timeZoneName);
        // console.log("dt",dateTime)
        let today = new Date(dateTime);
        let dateStr = today.toLocaleString("en-US",{timeZone : timeZoneName});
        let globalDate = new Date(dateStr);
        let globalDateTimeStr = globalDate.toDateString()+","+globalDate.toLocaleTimeString();
        let span = document.getElementById("currDateTime");
        span.innerHTML = globalDateTimeStr;
    }
}
window.onload = loadTimeZones;