// Create a request object we will be using
var request = new Request();

/**
 * when the form is submitted, execute code to add quiz
 * @param event {Object} event information on form submittion
 */
document.getElementById('quizForm').addEventListener('submit', function(event) {
  // Prevent default action of submitting a form
  event.preventDefault();

  // Create a parameters object for sending to api
  var params = {
    name: document.getElementById('name').value,
  };

  // Send post request to api endpoint
  request.send({
    method: 'POST',
    url: 'http://localhost:8000/api/quizzes',
    data: params,
  }, function(err, data) {
    if (err) {
      console.log(err);
    }

    // Print the data after we receive it
    addDataToHTML(data);
  });
});

function loadAllQuizzes() {
  // Send post request to api endpoint
  request.send({
    method: 'GET',
    url: 'http://localhost:8000/api/quizzes',
  }, function(err, data) {
    if (err) {
      console.log(err);
    }

    // Print the data after we receive it
    replaceHTMLWithData(data);
  });
}

/**
 * adds quizzes data to quizzes table
 * @param data {Object} new quiz data
 */
function addDataToHTML (data) {
  // Create row for new quiz
  var row = document.createElement('tr');
  // Create columns of attributes
  var nameCol = document.createElement('td');

  // Set content of columns 
  console.log(data);
  nameCol.innerHTML = data.name;

  // Add all columns to the row
  row.appendChild(nameCol);

  // Add row to table
  document.getElementById('quizzes').appendChild(row);
}

/**
 * empties quizzes table and adds all quizzes to it
 * @param data {Array} array of quiz data
 */
function replaceHTMLWithData (data) {
  // empty quizzes table
  document.getElementById('quizzes').innerHTML = '';

  // Loop through all quizzes
  for (var i = 0; i < data.length; i++) {
    // Create row for new quiz
    var row = document.createElement('tr');
    // Create columns of attributes
    var nameCol = document.createElement('td');

    // Set content of columns 
    nameCol.innerHTML = data[i].name;

    // Add all columns to the row
    row.appendChild(nameCol);

    // Add row to table
    document.getElementById('quizzes').appendChild(row);
  }
}

loadAllQuizzes();