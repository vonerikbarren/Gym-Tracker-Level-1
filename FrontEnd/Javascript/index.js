function addData() {
  var personName = document.getElementById("personName").value;
  var newRow = document.createElement("tr");
  var newCell = document.createElement("td");
  newCell.innerHTML = personName;
  newRow.append(newCell);
  document.getElementById("rows").appendChild(newRow);
  document.getElementById("personName").value = '';
}

function addWorkoutData() {
  var newWorkout = document.getElementById("workout").value;
  var newWeight = document.getElementById("weight").value;
  var newReps = documents.getElementById("reps").value;
  var newRow = document.createElement("tr");
  var newCell = document.createElement("td");
  newCell.innerHTML = workout;
  newCell.innerHTML = weight;
  newCell.innerHTML = reps;
  newRow.append(newCell);
  document.getElementById("rows").appendChild(newRow);
  document.getElementById("personName").value = "";
}