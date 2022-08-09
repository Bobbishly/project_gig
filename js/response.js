window.addEventListener('load', (event) => {
    const fraud_lists = document.getElementById("fraud_lists");
    let response= sessionStorage.getItem('virtualDigital_response');
    
if(!response){
   return;
} 
response=JSON.parse(response);

for(let i = 0;i <response.length;i++){
    const list = document.createElement("li");

list.appendChild(document.createTextNode(response[i]));

fraud_lists.appendChild(list)
}


});