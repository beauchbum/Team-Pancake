google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(elecDay);

function elecDay() {
        var data = google.visualization.arrayToDataTable([
          ['Day', 'Electricity Usage'],
          ['2/28',  6.5],
          ['2/29',  7],
          ['3/1',  4],
          ['3/2',  13]
        ]);

        var options = {
          title: 'Daily Carbon Emissions',
          curveType: 'line',
          legend: { position: 'none' },
		  hAxis: {title: "Day"},
		  vAxis: {title: "Emissions (kg)"}
        };

		
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
	  
function elecWeek() {
        var data = google.visualization.arrayToDataTable([
          ['Week', 'Electricity Usage'],
          ['2/7-2/13',  35],
          ['2/14-2/20',  40.5],
          ['2/21-2/27',  27],
          ['2/28-3/5',  32.5]
        ]);

        var options = {
          title: 'Weekly Carbon Emissions',
          curveType: 'line',
          legend: { position: 'none' },
		  hAxis: {title: "Week"},
		  vAxis: {title: "Emissions (kg)"}
        };

		
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
		
      }

function elecMonth() {
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Electricity Usage'],
          ['November',  135],
          ['December',  150],
          ['January',  130],
          ['February',  90]
        ]);

        var options = {
          title: 'Monthly Carbon Emissions',
          curveType: 'line',
          legend: { position: 'none' },
		  hAxis: {title: "Month"},
		  vAxis: {title: "Emissions (kg)"}
        };

		
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
}