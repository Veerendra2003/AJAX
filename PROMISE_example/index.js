let sp1,sp2;
function makePromise(currSec){
return pr = new Promise(function(resolve,reject){
    setTimeout(() => {
        if(currSec%2===0){
            resolve("Hurray! Project Done!");    
            console.log("Promise success");
        }
        else{
            reject("So Sad! couldn't complete the project");
            console.log("Promise resolved");
        }
    }, 5000);
});  
}
function suceess(msg){
    sp1.innerHTML+="<br>"+msg;
    sp2.innerHTML="😍😍😍😍😍😍😍😍😍😍😍";
}
function failure(msg){
    sp1.innerHTML+="<br>"+msg;
    sp2.innerHTML="😒😒😒😒😒😒😒😒😒😒😒";


}
function doTask(){
    let today = new Date();
    let currSec = today.getSeconds();
    sp1 = document.getElementById('result');
    sp2 = document.getElementById('icn');
    sp1.innerHTML = "Curr Value: "+currSec;
    let prObj = makePromise(currSec);
    console.log("After Creating Promise: ");
    prObj.then(suceess,failure);
    console.log("After consuming Promise: ");
}