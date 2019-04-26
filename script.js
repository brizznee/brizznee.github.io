/****

  To pull in data from a CSV file, we wrap our javascript inside a plot.d3.csv() function.

****/

Plotly.d3.csv('data/rihanna_summary.csv', function(err, rows){




  /***
  This function is useful for returning an array of values corresponding to a column in your CSV file. It's not built in to PLotly, so you have to declare it as follows:
  ***/
  var unpack = function(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

let Months = ['Jan 18','Feb 18','Mar 18','Apr 18', 'May 18', 'Jun 18','Jul 18','Aug 18','Sep 18','Oct 18','Nov 18','Dec 18','Jan 19', 'Feb 19', 'Mar 19', 'Apr 19'];



  /*** Now that we know how to pull the data from a CSV, we can create our data objects as we've done before: ***/
  var Death = {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows, 'Months'),
    y: unpack(rows, 'death'),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text: ['Death','Death','Death','Death','Death','Death','Death','Death','Death','Death','Death','Death','Death','Death','Death','Death'],
    //text: unpack(rows, 'Major'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Death',
    marker: {
     color: ['#992a15','#992a15','#992a15','#992a15','#992a15','#992a15','#992a15','#992a15','#992a15','#992a15','#992a15','#992a15', '#992a15','#992a15','#992a15','#992a15'] },

  };


  var Family= {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows, 'Months'),
    y: unpack(rows, 'family'),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text: ['Family','Family','Family','Family','Family','Family','Family','Family','Family','Family','Family','Family','Family','Family','Family','Family'],
    //text: unpack(rows, 'Major'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Family',
    marker: {
color: ['#ffa700','#ffa700','#ffa700','#ffa700','#ffa700','#ffa700','#ffa700','#ffa700','#ffa700','#ffa700','#ffa700','#ffa700','#ffa700','#ffa700','#ffa700','#ffa700'] },


  };


  var Fashion= {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows, 'Months'),
    y: unpack(rows, 'fashion'),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text: ['fashion','fashion','fashion','fashion','fashion','fashion','fashion','fashion','fashion','fashion','fashion','fashion','fashion','fashion','fashion','fashion'],
    //text: unpack(rows, 'Major'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Fashion',
    marker: {
color: ['#ff6700','#ff6700','#ff6700','#ff6700','#ff6700','#ff6700','#ff6700','#ff6700','#ff6700','#ff6700','#ff6700','#ff6700','#ff6700','#ff6700','#ff6700','#ff6700'] },


  };




  var Meme= {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows, 'Months'),
    y: unpack(rows, 'meme'),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text:['meme','meme','meme','meme','meme','meme','meme','meme','meme','meme','meme','meme','meme','meme','meme','meme'] ,
    //text: unpack(rows, 'Major'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'meme',

    marker: {
color: ['#fdff00','#fdff00','#fdff00','#fdff00','#fdff00','#fdff00','#fdff00','#fdff00','#fdff00','#fdff00','#fdff00','#fdff00','#fdff00','#fdff00','#fdff00','#fdff00'] },


  };


   var Political= {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows, 'Months'),
    y: unpack(rows, 'political'),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text:['Political','Political','Political','Political','Political','Political','Political','Political','Political','Political','Political','Political','Political','Political','Political','Political'],

    //text: unpack(rows, 'Major'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Political',

    marker: {
color: ['#6fff00','#6fff00','#6fff00','#6fff00','#6fff00','#6fff00','#6fff00','#6fff00','#6fff00','#6fff00','#6fff00','#6fff00','#6fff00','#6fff00','#6fff00','#6fff00'] },

  };

 var Fenty= {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows, 'Months'),
    y: unpack(rows, 'fenty'),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
text:['Fenty','Fenty','Fenty','Fenty','Fenty','Fenty','Fenty','Fenty','Fenty','Fenty','Fenty','Fenty','Fenty','Fenty','Fenty','Fenty'],

    //text: unpack(rows, 'Major'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Fenty',

    marker: {
color: ['#78a65a','#78a65a','#78a65a','#78a65a','#78a65a','#78a65a','#78a65a','#78a65a','#78a65a','#78a65a','#78a65a','#78a65a','#78a65a','#78a65a','#78a65a','#78a65a'] },

  };

   var Savage= {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows, 'Months'),
    y: unpack(rows, 'savage'),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
text:['savage','savage','savage','savage','savage','savage','savage','savage','savage','savage','savage','savage','savage','savage','savage','savage'],

    //text: unpack(rows, 'Major'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Savage',

    marker: {
color: ['#00dfff','#00dfff','#00dfff','#00dfff','#00dfff','#00dfff','#00dfff','#00dfff','#00dfff','#00dfff','#00dfff','#00dfff','#00dfff','#00dfff','#00dfff','#00dfff'] },

  };

    var Music= {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows, 'Months'),
    y: unpack(rows, 'music'),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
text:['music','music','music','music','music','music','music','music','music','music','music','music','music','music','music','music'],
    //text: unpack(rows, 'Major'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Music',
    marker: {
color: ['#4e84c1','#4e84c1','#4e84c1','#4e84c1','#4e84c1','#4e84c1','#4e84c1','#4e84c1','#4e84c1','#4e84c1','#4e84c1','#4e84c1','#4e84c1','#4e84c1','#4e84c1','#4e84c1'] },

  };
  /*** Now that we've created our data objects using our CSV, we just create the visualization as we've done before: ***/



  var Mag ={
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows, 'Months'),
    y: unpack(rows, 'mag'),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
text:['mag','mag','mag','mag','mag','mag','mag','mag','mag','mag','mag','mag','mag','mag','mag','mag'],
    //text: unpack(rows, 'Major'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Magazine',
    marker: {
color: ['#b2a8d3','#b2a8d3','#b2a8d3','#b2a8d3','#b2a8d3','#b2a8d3','#b2a8d3','#b2a8d3','#b2a8d3','#b2a8d3','#b2a8d3','#b2a8d3','#b2a8d3','#b2a8d3','#b2a8d3','#b2a8d3'] },

  };

  var Film ={
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows, 'Months'),
    y: unpack(rows, 'film'),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
text:['film','film','film','film','film','film','film','film','film','film','film','film','film','film','film','film'],
    //text: unpack(rows, 'Major'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Film',
    marker: {
color: ['#a300ff','#a300ff','#a300ff','#a300ff','#a300ff','#a300ff','#a300ff','#a300ff','#a300ff','#a300ff','#a300ff','#a300ff','#a300ff','#a300ff','#a300ff','#a300ff'] },

  };



 var Business ={
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows, 'Months'),
    y: unpack(rows, 'business'),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'lines', // possible modes: markers, markers+text, lines
text:['business'],
    //text: unpack(rows, 'Major'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Business',
    marker: {
color: ['#0017f5'] },

  };


   var Personal ={
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows, 'Months'),
    y: unpack(rows, 'personal'),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'lines', // possible modes: markers, markers+text, lines
text:['Personal'],
    //text: unpack(rows, 'Major'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Personal',
    marker: {
color: ['#eb3323'] },

  };


  // Create the data object as an array of our data series objects:
  var data = [Death, Family,Fashion, Meme,Political, Fenty, Savage, Music, Mag, Film,Business,Personal];


  // The layout object provides options for how our visualization will appear:
  var layout = {
    title:'Rihanna IG',
    showlegend: true,
    hovermode: true, // if false, disables the hover text for the entire plot
    xaxis: {
     title: 'Months'
    },
    yaxis: {
     title: 'Posts'
    }
  }

  var options = {
   displayModeBar: true, // disable zoom, save and other toolbar options.
  }

  Plotly.newPlot('viz', data, layout, options);




})

  
