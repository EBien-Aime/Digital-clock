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
    document.getElementById("morn").style.display = "none";
    document.getElementById("noon").style.display = "none";
    document.getElementById("night").style.display = "none";
    if(hr>20){
    document.getElementById("greeting").innerHTML = "<h1>Good Morning!</h1>";
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1462003627669-87bee17e0b4e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7e8f867435ce3060217d4f2f4a6d58b0&auto=format&fit=crop&w=500&q=80')";
  }
    if (hr>12){
      document.getElementById("greeting").innerHTML = "<h1>Good Afternoon!</h1>";
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1500919163405-a74de56e56f7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=84c20bee31126da40f2a538544a94341&auto=format&fit=crop&w=752&q=80')";
    }
    if (hr>18){
      document.getElementById("greeting").innerHTML = "<h1>Good Night!</h1>";
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1502680453940-2e90396217ee?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=13f3b744d4d6f828e16f7d46e9a53afe&auto=format&fit=crop&w=750&q=80')";
    }
}

//hr>5 && hr<12
//hr>12 && hr<18
//hr>18 && hr<5
