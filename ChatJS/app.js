var app = require('http').createServer(resposta);
var fs = require('fs');

app.listen(3000);
console.log("Aplicação está em execução");

function resposta (req, res) {
    var arquivo ="";
    if(req.url =="/"){
        arquivo = __dirname + '/index.html';
    }else{
        arquivo = __dirname + req.url;
    }
    fs.readFile(arquivo,
    function (err, data) {
        if (err){
            res.writeHead(404);
            return res.end('Página ou arquivo não encontrados');
        
        }
        
        res.writeHead(200);
        res.end(data);
    });
}