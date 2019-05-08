const $root = document.querySelector("#root");

const $table = document.createElement("table");
$table.className = "gridtable";
const $thead = document.createElement("thead");
const $headerRow = document.createElement("tr");
const $tblBody = document.createElement("tbody");
//const $tableHeader = document.createElement("tr")

async function buscaDados() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");
  const json = await response.json();

  return json;
}

async function recebeDados() {
  const teste = await buscaDados();

  var headeRow = ["Email", "UserName", "Nome", "Empresa", "Endereço"].forEach(
    el => {
      var th = document.createElement("th");
      th.append(document.createTextNode(el));
      //console.log(th)
      $headerRow.appendChild(th);
    }
  );

  //console.log($headerRow)
  $thead.appendChild($headerRow);
  $table.appendChild($thead);
  //Criacao do table Header
  // $tableHeader.append("Email");
  // $tableHeader.append("Nome");
  // $table.appendChild($tableHeader);

  const saida = teste.map(user => {
    //console.log(user)
    var cia = JSON.stringify(user.company);
    console.log(cia);
    return [user.email, user.username, user.name, JSON.stringify(user.company.name)
      , JSON.stringify(user.address)];
  });

  //console.log(saida);
  saida.forEach(function(el) {
    var tr = document.createElement("tr");
    for (var o in el) {
      var td = document.createElement("td");
      console.log(el[o]);
      td.appendChild(document.createTextNode(el[o]));
      tr.appendChild(td);
    }
    $tblBody.appendChild(tr);
  });

  $table.appendChild($tblBody);

  $root.appendChild($table);
}

var saida = recebeDados();

$root.insertBefore($table, null);
