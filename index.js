const $root = document.querySelector("#root")

const $table = document.createElement("table")
$table.className="gridtable"
const $thead = document.createElement("thead")
const $headerRow = document.createElement("tr")
const $tblBody = document.createElement("tbody")
//const $tableHeader = document.createElement("tr")



async function buscaDados() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");
  const json = await response.json();
  
  return json;
}

async function recebeDados() {
  const teste = await buscaDados();

  var headeRow = ["Email","Nome"].forEach((el) =>  {
    var th=document.createElement("th");
    th.append(document.createTextNode(el));
    console.log(th)
    $headerRow.appendChild(th);
  });
  
  console.log($headerRow)
  $thead.appendChild($headerRow)
  $table.appendChild($thead)
  //Criacao do table Header
  // $tableHeader.append("Email");
  // $tableHeader.append("Nome");
  // $table.appendChild($tableHeader);

  const saida = teste.map(user => {
    //TODO retornar username + compania + email + phone
    //`<li>${user.name}</li>`
    let tr = document.createElement("tr");
    $tblBody.appendChild(tr);
    let td = document.createElement("td");
    let texto = document.createTextNode(user.email);
    let texto2 = document.createTextNode(user.name);
    
    td.appendChild(texto);
    td.appendChild(texto2)

    tr.appendChild(td);


  });
  //console.log(saida)

  $table.appendChild($tblBody);
  
  $root.appendChild($table);
  
}

var saida = recebeDados();

$root.insertBefore($table, null);
