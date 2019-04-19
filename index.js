const $root = document.querySelector("#root");

const $wrap = document.createElement("div");

async function buscaDados() {
  const response =  await fetch("https://jsonplaceholder.typicode.com/todos/1")
  const json = await response.json();  
  console.log(json);
  return `${json.title} e o id é  ${json.id}`
  // .then(response => response.json())
    // .then(json => {
    //   //TODO criar um OBJ que retorna a promisse
    //     console.log(json.title + json.completed);
    //   //title + userid
    //   return json.title + json.completed})
    // .catch(err => console.log("erro de carregamento"));
};

async function recebeDados(){
var teste = await buscaDados();
$wrap.innerHTML = `<p> ${teste} </p>`;
console.log(`${teste} `);
}

var saida = recebeDados();

$root.insertBefore($wrap, null);
