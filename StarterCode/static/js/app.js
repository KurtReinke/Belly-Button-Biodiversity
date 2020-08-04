
  //Create a horizontal bar chart with a dropdown menu to
  // display the top 10 OTUs found in that individual.
//Function init {
  // Use d3.json() to fetch data from JSON file
d3.json("../samples.json").then((incomingdata) => {
    console.log(incomingdata);
    var data=incomingdata;
    //data.forEach
    //function filterMovieRatings(movie) {
      //return movie.imdbRating > 8.9;
    //Use sample_values as the values for the bar chart.

      //Use otu_ids as the labels for the bar chart.
      
      //se otu_labels as the hovertext for the chart.

    //var samples= data.samples;
    // Set up arrays for horizontal bar chart & gauge chart
    var otu_id = data.samples[0].otu_ids.slice(0,10).reverse();
    var values =  data.samples[0].sample_values.slice(0,10).reverse();
    //console.log(samplevalues);
    var labels = data.samples[0].otu_labels.slice(0,10);
    //var otuLabels = data.samples[index].otu_labels;
    //var sample_values = names2.sample_values.slice(0, 10);
   // var labels = samples.otu_labels.slice(0, 10);
    //var names1 = incomingData.filter(names);
    //var names2= data.names;
    
//Trace for Bar chart
    var trace1 = {
      type: "bar",
      orientation: "horizontal",
      //mode: "lines",
      name: "10 Otus",
      x: values,
      y: otu_id,
      //line: {
      marker: {
        color: "#17BECF"
      }
    };
    function init() {
      var data = [trace1];

      var layout = {
        title: `${otu_id} Top 10 OTU's in this Individual`,
      //xaxis: {
        //range: [startDate, endDate],
        //type: "date"
      //},
        yaxis: {
          autorange: true,
          type: "linear"
        }
      };

      Plotly.newPlot("bar", data, layout);

    };
});


// Create your trace.
    var trace2 = {
      x: otu_id,
      y: values,
      mode:"markers",
      marker: { 
      size: values,
      color: otu_id
      },
    };
    function init() {
      var data2 = [trace2];

  // Define the plot layout
      var layout = {
        xaxis: { title: "OTU ID" }
    //yaxis: { title: "Metascore (Critic) Rating"}
      };
      Plotly.newPlot("bubble", data2, layout);
    };


  //meta data
function getinfo(id) {
    d3.json("../samples.json").then((data)=> {
      var metadata1 = data.metadata.filter(meta => meta.id.toString() === id)[0];
      var info = d3.select("#sample-metadata");

      info.html("");

      Object.entries(data.metadata).forEach((key) => {   
      info.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
      });
    });
  };

      //for (var i = 0; i < data.names.length; i++) {
        //if (ID === data.names[i]) {
          //updatePlots(i);
          //return







  }  

// Function called by DOM changes
//function getData() {
    //var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    //var dataset = dropdownMenu.property("value");
    //var data = [];
    //if (dataset == 'us') {
       // data = us;
    //}
    //else if (dataset == 'uk') {
    //    data = uk;
    //}
    // Call function to update the chart
    //updatePlotly(data);
  //} 
  // Update the restyled plot's values
  //function updatePlotly(newdata) {
    //Plotly.restyle("pie", "values", [newdata]);
  //}
  
 // init();
