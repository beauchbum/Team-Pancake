<<<<<<< Updated upstream
function drawChart() {
=======
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawWeeks);

      function drawWeeks() {
>>>>>>> Stashed changes
        var data = google.visualization.arrayToDataTable([
          ['Week', 'Thrown Away', 'Recycled'],
          ['1',  15,     10],
          ['2',  11,     16],
          ['3',  13,     14,
          ['4',  12,     15]
        ]);

        var options = {
          legend: { position: 'bottom' },
          hAxis: {title: 'Time (Weeks)'},
          vAxis: {title: 'Weight (Pounds)'}
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }