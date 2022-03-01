var app = require('http').createServer(resposta);
var fs = require('fs');

app.listen(3000);
console.log("Aplicação está em execução");
function resposta (rec, res) {
    fs.readFile(__dirname + '/index.html',
    function (err, data) {
        if (err){
            res.writeHead(500);
            return res.end('Erro ao carregar o arquivo index.html');

        }
        res.writeHead(200);
        res.end(data);
    });
}