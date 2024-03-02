
const readline=require('readline');
const line1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
line1.question("Please enter your name:",(input)=>{
    console.log("Hello "+input);
    line1.close();
})