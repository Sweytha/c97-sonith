function submit(){
    num1=document.getElementById("subnum1").value;
    num2=document.getElementById("subnum2").value;
    num1=parseFloat(num1)
    num2=parseFloat(num2)
    totalnum=num1-num2;
    document.getElementById("output").innerHTML = totalnum;
}
function back(){
    window.location = 'calhub.html'
}