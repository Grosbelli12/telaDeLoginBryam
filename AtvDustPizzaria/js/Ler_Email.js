function lerEmail(){
    var email = document.getElementById("meu-email").value;
    return email
}

document.getElementById("meu-email").addEventListener("focus",function(){
    document.getElementById("icone-email").style.display = "none";
});

document.getElementById("meu-email").addEventListener("blur",function(){
if(this.value ===""){
     document.getElementById("icone-email").style.display = "inline";
}
});
