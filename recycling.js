google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawWeeks);
/* holds weights for the graphs */
var T = 0;
var R = 0;
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
  recPounds.innerHTML = recycle.innerHTML;
  trashPounds.innerHTML = trash.innerHTML;
}
/* functions that create the graphs */
      function drawWeeks(T,R) {
        var data = google.visualization.arrayToDataTable([
          ['Week', 'Thrown Away', 'Recycled'],
          ['2/7-2/13',  15,     10],
          ['2/14-2/20',  11,     16],
          ['2/21-2/27',  13,     14,
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
          ['November',  60,     40],
          ['December',  44,     64],
          ['January',  52,     56,
          ['February',  36+T,     45+R]
        ]);

        var options = {
          legend: { position: 'bottom' },
          hAxis: {title: 'Month'},
          vAxis: {title: 'Weight (Pounds)'}
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
        