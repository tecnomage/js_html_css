var MOUNTAINS = [
  {"name":"Mount Everest","height":8848,"country":"Nepal"},
  {"name":"Mount Rushmore","height":18,"country":"USA"}
];	


function buildTable(data) {
    var table = document.createElement("table");
    table.className="gridtable";
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var headRow = document.createElement("tr");
    ["Name","Height","Country"].forEach(function(el) {
      var th=document.createElement("th");
      th.appendChild(document.createTextNode(el));
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead); 
    data.forEach(function(el) {
      var tr = document.createElement("tr");
      for (var o in el) {  
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(el[o]))
        tr.appendChild(td);
      }
      tbody.appendChild(tr);  
    });
    table.appendChild(tbody);             
    return table;
}
window.onload=function() {
  document.getElementById("content").appendChild(buildTable(MOUNTAINS));
}