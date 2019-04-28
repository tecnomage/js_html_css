const $root = document.querySelector("#root");

const $table = document.createElement("table");
const $tblBody = document.createElement("tbody");

//$wrap.appendChild($tblBody);
//FAZER O MERGE
async function buscaDados() {
  const response =  await fetch("https://jsonplaceholder.typicode.com/users/")
  const json = await response.json();  
  //console.log(json);
  return json;
  
};

async function recebeDados(){
var teste = await buscaDados();
const saida = teste.map(user => {
   console.log(user)
  //TODO retornar username + compania + email + phone 
  //`<li>${user.name}</li>`
  let tr = document.createElement("tr");
  //$tblBody.appendChild(tr);
  var td = document.createElement("td")
  var texto = document.createTextNode(user.email)
  td.appendChild(texto);
  tr.appendChild(td)
  //var cellText = document.createTextNode() 
})
console.log(saida)
$table.appendChild($tblBody)
$root.appendChild($table)
//console.log(`${teste} `);
}

var saida = recebeDados();

$root.insertBefore($table, null);
