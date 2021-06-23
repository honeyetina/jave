// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// BONUS: Refactor to use Arrow Functions!
tableData.forEach((data_row) => {
  var row = tbody.append("tr");
  Object.entries(data_row).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);

  function gt3(x) {
      console.log([x.datetime, inputValue])
    return x.datetime === inputValue;
  }
  tableData = data.filter(gt3)
  console.log(tableData);
  // Set the span tag in the h1 element to the text
  // that was entered in the form
//   d3.select("h1>span").text(inputValue);

  tbody.html("")

  tableData.forEach((data_row) => {
    var row = tbody.append("tr");
    Object.entries(data_row).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}