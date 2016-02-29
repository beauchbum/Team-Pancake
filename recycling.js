function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Week', 'Thrown Away', 'Recycled'],
          ['1',  1000,      400],
          ['2',  1170,      460],
          ['3',  660,       1120],
          ['4',  1030,      540]
        ]);

        var options = {
          legend: { position: 'bottom' },
          hAxis: {title: 'Time (Weeks)'},
          vAxis: {title: 'Weight (Pounds)'}
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }