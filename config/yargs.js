const argv = require('yargs')
    .options("b",{
        alias: "base",
        type: 'number',
        demandOption:true,
        describe: "es la base de la tabla de multiplicar"
    })
    .options("l", {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe:'muestra la tabla en consola' 

    })
    .options("h", {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe:'indica hasta que numero se debe hacer la tabla' 
    })
    .check(( argv, options)=>{
        if(isNaN( argv.b )){
            throw "La base tien que ser un numero"
        } else {
            return true
        }
    })
    .argv;
 
// console.log(process.argv)
// const [,, arg3= "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=")

//console.log(argv.b)    

module.exports =  argv;

