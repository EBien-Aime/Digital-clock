var time = document.getElementById('clock')


function startTime(){
  var today = new Date()
  var hr = today.getHours()
  var min = today.getMinutes()
  var sec = today.getSeconds()
  if(hr.toString().length < 2) {
    hr = '0' + hr; }
      if(min.toString().length < 2) {
        min = '0' + min; }
      if(sec.toString().length < 2) {
         sec = '0' + sec; }
  document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
  var time = setTimeout(function(){ startTime() }, 500);
    document.body.style.backgroundColor="#097f9f"
    if(hr>20){
    document.getElementById("greeting1").innerHTML = "<h1>Good Morning!</h1>";
    }
    if (hr>12){
      document.getElementById("greeting1").innerHTML = "<h1>Good Afternoon!</h1>";

    }
    if (hr>18){
      document.getElementById("greeting1").innerHTML = "<h1>Good Night!</h1>";

    }
}

//hr>5 && hr<12
//hr>12 && hr<18
//hr>18 && hr<5
