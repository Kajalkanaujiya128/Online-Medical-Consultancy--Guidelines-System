      
      let home2=document.querySelector(".home2");

      let medicines2=document.querySelector(".medicines2");

    let services2=document.querySelector(".services2");
    
    let login2=document.querySelector(".login2");
  
  
  document.getElementById('homelink2').addEventListener('click', function(e){
    e.preventDefault();   // link ka default action rokna hai
    window.location.reload();
  });



home2.addEventListener("click", function() {
    window.location.href = "index.html";  
});

services2.addEventListener("click", function() {
    window.location.href = "services.html";  
});
login2.addEventListener("click", function() {
    window.location.href = "login.html";  
});