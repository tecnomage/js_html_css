//Ler arquivo
const fs = require('fs')
//C:/your/path/to/file.txt
fs.readFile("N:/PJeMidiasAudienciaDigital_CNJ/NUM_PROCESSO_TESTES.txt", (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data.toString())
})

// function readTextFile(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {

//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 //alert(allText);
//                 console.log(allText)
//             }
//         }
//     }
//     rawFile.send(null);
// }

// readTextFile("file:///:/JeMidiasAudienciaDigital_CNJ/NUM_PROCESSO_TESTES.txt")