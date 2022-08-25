// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

  function buildTable(data) {
    tbody.html(""); // inserts blank "" space, i.e., clears data 
    // for loop to iterate through the rows 
    data.forEach((dataRow) => {
      let row = tbody.append("tr"); // append a table row (tr) to the table body
      
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => { //reference one object from the array of UFO data. put each sighting onto its own row of data. 
      let cell = row.append("td");
      cell.text(val);
      });

    });

  }