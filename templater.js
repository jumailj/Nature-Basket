module.exports = (temp,product) =>{
    let outputFile = temp.replace(/<%FRUIT_EMOJI%>/g, product.emoji);
    outputFile = outputFile.replace(/<%FRUIT_NAME%>/, product.fruitName);
    outputFile = outputFile.replace(/<%NO_OF_FRUIT%>/, product.noOfFruit);
    outputFile = outputFile.replace(/<%RATE_OF_FRUIT%>/, product.rateOfFruit);
    return outputFile;
}