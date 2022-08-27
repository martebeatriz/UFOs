// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");



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
      }
    );
  });
}

  // filter for the table 
function handleClick() {
  let date = d3.select("#datetime").property("value"); // select string: "#datetime" in HTML, .property("value") will grab that information and hold it in the "date" variable.
  let filteredData = tableData; // set a default filter to be the original table data
  // check if a date was entred and filter by date 
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  };
  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};

// add filter button
d3.selectAll("#filter-btn").on("click", handleClick);

// bring back the origional table 
buildTable(tableData);