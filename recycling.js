google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawWeeks);
/* holds weights for the graphs */
var T = 12;
var R = 15;
/* How much was done last week */
var recPounds = document.getElementById("recPounds");
var trashPounds = document.getElementById("trashPounds");
/* Incoming weight */
var trash = document.getElementById("trash");
var recycle = document.getElementById("recycle");
/* Submit button */
var submit = document.getElementById("submit");

/* Updates last weeks data to this weeks */
submit.onclick = function() {
  recPounds.innerHTML = "Last week you recycled " + recycle.value + " pounds of recyclables.";
  trashPounds.innerHTML = "Last week you threw away " + trash.value + " pounds of trash.";
  T = trash.value;
  R = recycle.value;
}   

/* functions that create the graphs */
      function drawWeeks(T,R) {
        var data = google.visualization.arrayToDataTable([
          ['Week', 'Thrown Away', 'Recycled'],
          ['2/7-2/13',  15,     10],
          ['2/14-2/20',  11,     16],
          ['2/21-2/27',  13,     14],
          ['2/28-3/5',  T,     R]
        ]);

        var options = {
          legend: { position: 'bottom' },
          hAxis: {title: 'Week'},
          vAxis: {title: 'Weight (Pounds)'}
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }

       function drawMonths(T,R) {
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Thrown Away', 'Recycled'],
          ['November',  50,     45],
          ['December',  48,     60],
          ['January',  48,     52],
          ['February',  T*4,     4*R]
        ]);

        var options = {
          legend: { position: 'bottom' },
          hAxis: {title: 'Month'},
          vAxis: {title: 'Weight (Pounds)'}
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
