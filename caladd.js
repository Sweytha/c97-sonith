function submit(){
    num1=document.getElementById("addnum1").value;
    num2=document.getElementById("addnum2").value;
    num1=parseFloat(num1)
    num2=parseFloat(num2)
    totalnum=num1+num2;
    document.getElementById("output").innerHTML = totalnum;
}
function back(){
    window.location = 'calhub.html'
}