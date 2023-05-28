const fs= require('fs');
const http = require('http');


let overviewpage= fs.readFileSync(`${__dirname}/template/template-overview.html`, 'utf-8');
let productCard = fs.readFileSync(`${__dirname}/template/template-card.html`, 'utf-8');
let fruits = JSON.parse( fs.readFileSync(`${__dirname}/data/fruit-data.json`));
let prodcutCards = '';
console.log(fruits);


productCard = productCard.replace(/<%FRUIT_EMOJI%>/mg, fruits[0].emoji); 
productCard = productCard.replace(`<%FRUIT_NAME%>`, fruits[0].fruitName);
productCard = productCard.replace(`<%NO_OF_FRUIT%>`, fruits[0].noOfFruit);
productCard = productCard.replace(`<%RATE_OF_FRUIT%>`, fruits[0].rateOfFruit);

prodcutCards+= productCard;


//console.log(productCard);
overviewpage = overviewpage.replace(`<%PRODUCTS%>`, prodcutCards)

const server= http.createServer((req,res)=>{

    res.end(overviewpage);
});


server.listen(8000,'127.0.0.1',()=>{
    console.log('listening to requerst on port 8000');
})