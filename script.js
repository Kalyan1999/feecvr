console.log("linked");

async function func1() {
    document.getElementById("cse").style.display="none";
    document.getElementById("msg").innerHTML="Loading..."
    setTimeout(function(){
        document.getElementById("msg").style.display="none";
         document.getElementById("cse").style.display="block";
         }, 3000);
  }
 function func2() {
    document.getElementById("it").style.display="none";
    document.getElementById("msg1").innerHTML="Loading..."
    setTimeout(function(){
        document.getElementById("msg1").style.display="none";
         document.getElementById("it").style.display="block";
         }, 6000);
  }

  function func3() {
    document.getElementById("ece").style.display="none";
    document.getElementById("msg2").innerHTML="Loading..."
    setTimeout(function(){
        document.getElementById("msg2").style.display="none";
         document.getElementById("ece").style.display="block";
         }, 9000);
  }

window.onload=function(){func1().then(func2()).then(func3());}
