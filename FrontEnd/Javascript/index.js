function addData() {
  var personName = document.getElementById("personName").value;
  var newRow = document.createElement("tr");
  var newCell = document.createElement("td");
  newCell.innerHTML = personName;
  newRow.append(newCell);
  document.getElementById("rows").appendChild(newRow);
  document.getElementById("personName").value = '';
}