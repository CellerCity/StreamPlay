document.querySelector(".checkbox").addEventListener("click",function(){
    var x = document.querySelector(".password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
});