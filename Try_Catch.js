//Try catch

const alou = '{"name" "Alou"}';

try{
    console.log(name);
    console.log(JSON.parse(alou));
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    console.log("Invalid JSON");
    console.log(error);
    
    
}
    