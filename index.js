const fs= require('fs');
const http = require('http');

const overviewpage= fs.readFileSync(`${__dirname}/template/template-overview.html`, 'utf-8');

console.log(overviewpage);


const server= http.createServer((req,res)=>{

    res.end(overviewpage);
});



server.listen(8000,'127.0.0.1',()=>{
    console.log('listening to requerst on port 8000');
})