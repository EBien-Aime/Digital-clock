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
  var color = '#' + hr + min + sec;
  document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
     var time = setTimeout(function(){ startTime() }, 500);
    document.body.style.background = color;
}



// function checkTime(number) {
//   if (number<10) {
//     number = "0" + number;
//   }
//   return number
// }
