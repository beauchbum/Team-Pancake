google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(elecDay);

function elecDay() {
		document.getElementById("usageInTimeframe").innerHTML = "Today you used 9000 kWh of electricity";
        var data = google.visualization.arrayToDataTable([
          ['Day', 'Electricity Usage'],
          ['2/28',  1000],
          ['2/29',  1170],
          ['3/1',  660],
          ['3/2',  1030]
        ]);

        var options = {
          title: 'Daily Electricity Usage',
          curveType: 'line',
          legend: { position: 'none' },
		  hAxis: {title: "Day"},
		  vAxis: {title: "Usage (kWh)"}
        };

		
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
	  
function elecWeek() {
		document.getElementById('usageInTimeframe').innerHTML = "Last week you used 9000 kWh of electricity";
        var data = google.visualization.arrayToDataTable([
          ['Week', 'Electricity Usage'],
          ['2/7-2/13',  5000],
          ['2/14-2/20',  5555],
          ['2/21-2/27',  5222],
          ['2/28-3/5',  4700]
        ]);

        var options = {
          title: 'Weekly Electricity Usage',
          curveType: 'line',
          legend: { position: 'none' },
		  hAxis: {title: "Week"},
		  vAxis: {title: "Usage (kWh)"}
        };

		
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
		
      }

function elecMonth() {
		document.getElementById('usageInTimeframe').innerHTML = "Last month you used 9000 kWh of electricity";
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Electricity Usage'],
          ['November',  20000],
          ['December',  24000],
          ['January',  25000],
          ['February',  19000]
        ]);

        var options = {
          title: 'Monthly Electricity Usage',
          curveType: 'line',
          legend: { position: 'none' },
		  hAxis: {title: "Month"},
		  vAxis: {title: "Usage (kWh)"}
        };

		
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
}