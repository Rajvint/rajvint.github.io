google.charts.load('current', {packages: ['corechart']});
google.charts.load('current', {packages: ['corechart','line']});
// chart script 
  function drawChart1() {
     // Define the chart to be drawn.
     var data = google.visualization.arrayToDataTable([
        ['Year', 'Dataset1', 'Dataset2'],
        ['0',  200,      290],
        ['1',  900,      390],
        ['2',  1000,      400],
        ['3',  1170,      440],
        ['4',  1250,       480],
        ['5',  1530,      540],
        ['6',  1530,      540]
     ]);

     var options = {title: ''};  

     // Instantiate and draw the chart.
     var chart1 = new google.visualization.ColumnChart(document.getElementById('container1'));
     chart1.draw(data, options);
  }
  google.charts.setOnLoadCallback(drawChart1);
  
// chart2
  function drawChart() {
   // Define the chart to be drawn.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Month');
   data.addColumn('number', 'Dataset1');
   data.addColumn('number', 'Dataset2');
   data.addColumn('number', 'Dataset3');
   data.addColumn('number', 'Dataset4');
   
   data.addRows([
      ['0',  2.0, 0.2, 0.9, 3.9],
      ['1',  5.9, 1.4, 0.5, 4.2],
      ['2',  5.5,  3.7, 1.5, 3.7],
      ['3',  11.5, 9.3, 9.4, 6.5],
      ['4',  15.2, 11.0, 8.5, 9.9],
      ['5',  19.5, 21.0, 10.0, 12.2],
      
    
   ]);
      
   // Set chart options
   var options = {   
      // 'width':550,
      'height':400,
      colors: ['#ADCEC4', '#063224', '#ff0000', '#6F82E7']
   };

   // Instantiate and draw the chart.
   var chart = new google.visualization.LineChart(document.getElementById('container2'));
   chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart);


// ledger chart 
google.charts.load('current', {packages: ['corechart']});  
function drawChart3() {
   // Define the chart to be drawn.
   var data = google.visualization.arrayToDataTable([
      ['Year', 'Yearly Progress'],
      ['2012',  900],
      ['2013',  1000],
      ['2014',  1170],
      ['2015',  1250],
      ['2016',  1530]
   ]);

   var options = {
       colors: ['#F8AE1F']
   }; 

   // Instantiate and draw the chart.
   var chart = new google.visualization.ColumnChart(document.getElementById('container'));
   chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart3);


// purchase chart 
