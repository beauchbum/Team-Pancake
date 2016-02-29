google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(elecDay);

function elecDay() {
		document.getElementById("usageInTimeframe").innerHTML = "Today you used 10 gallons of water.";
        var data = google.visualization.arrayToDataTable([
          ['Day', 'Water Usage'],
          ['2/28',  10],
          ['2/29',  11],
          ['3/1',  6],
          ['3/2',  10]
        ]);

        var options = {
          title: 'Daily Water Usage',
          curveType: 'line',
          legend: { position: 'none' },
		  hAxis: {title: "Day"},
		  vAxis: {title: "Usage (gallons)"}
        };

		
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
	  
function elecWeek() {
		document.getElementById('usageInTimeframe').innerHTML = "Last week you used 100 gallons of water.";
        var data = google.visualization.arrayToDataTable([
          ['Week', 'Water Usage'],
          ['2/7-2/13',  80],
          ['2/14-2/20',  90],
          ['2/21-2/27',  95],
          ['2/28-3/5',  85]
        ]);

        var options = {
          title: 'Weekly Water Usage',
          curveType: 'line',
          legend: { position: 'none' },
		  hAxis: {title: "Week"},
		  vAxis: {title: "Usage (gallons)"}
        };

		
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
		
      }

function elecMonth() {
		document.getElementById('usageInTimeframe').innerHTML = "Last month you used 500 gallons of water.";
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Water Usage'],
          ['November',  500],
          ['December',  455],
          ['January',  555],
          ['February',  400]
        ]);

        var options = {
          title: 'Monthly Water Usage',
          curveType: 'line',
          legend: { position: 'none' },
		  hAxis: {title: "Month"},
		  vAxis: {title: "Usage (gallons)"}
        };

		
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
}