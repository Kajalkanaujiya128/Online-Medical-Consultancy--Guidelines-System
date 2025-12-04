    function goTo(page) {
        window.location.href = page;
    }
// let home1=document.querySelector(".home");
    let medicines1=document.querySelector(".medicines");
    let services1=document.querySelector(".services");
    let login1=document.querySelector(".login");

document.getElementById('homelink').addEventListener('click', function(e){
    e.preventDefault();   // link ka default action rokna hai
    window.location.reload();
  });
services1.addEventListener("click", function() {
    window.location.href = "services.html";  
});


medicines1.addEventListener("click", function() {
    window.location.href = "medicineBTN.html";  
});


login1.addEventListener("click", function() {
    window.location.href = "login.html";  
});

