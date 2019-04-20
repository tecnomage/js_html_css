const $root = document.querySelector("#root");

const $wrap = document.createElement("div");

async function buscaDados() {
  const response =  await fetch("https://jsonplaceholder.typicode.com/todos/")
  const json = await response.json();  
  console.log(json);
  return json;
  
};

async function recebeDados(){
var teste = await buscaDados();
const saida = teste.map( todo => {
  //console.log(todo)
  return `<p> ${todo.title} </p><br>`
})
console.log(saida);
$wrap.innerHTML = saida.join('');
//console.log(`${teste} `);
}

var saida = recebeDados();

$root.insertBefore($wrap, null);
