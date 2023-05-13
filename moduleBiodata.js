var consoleBiodata = require('./biodata')

var nama = "Irfan Yahya Abdillah";
var tempatLahir = "Bogor";
var tanggalLahir = "17 September 1999";
var alamat = "Jl. Beringin, Bogor"


consoleBiodata.biodata(nama, tempatLahir, tanggalLahir, alamat);

var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type' : 'text/plain'});
    res.write(consoleBiodata.biodata(nama, tempatLahir, tanggalLahir, alamat));
    res.end();
}).listen(8080)
