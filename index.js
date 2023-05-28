const fs= require('fs');
const http = require('http');

const templater = require(`${__dirname}/templater`);


let overviewpage= fs.readFileSync(`${__dirname}/template/template-overview.html`, 'utf-8');
let productCardTemplate = fs.readFileSync(`${__dirname}/template/template-card.html`, 'utf-8');
let fruits = JSON.parse( fs.readFileSync(`${__dirname}/data/fruit-data.json`));


let card = '';
let finalcard = '';

fruits.map(element=>{
    // console.log(element);
    card = templater(productCardTemplate, element);
    finalcard += card;
});

//console.log(productCard);
overviewpage = overviewpage.replace(`<%PRODUCTS%>`, finalcard)

const server= http.createServer((req,res)=>{

    res.end(overviewpage);
});


server.listen(8000,'127.0.0.1',()=>{
    console.log('listening to requerst on port 8000');
})