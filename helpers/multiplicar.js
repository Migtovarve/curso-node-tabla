const fs = require("fs");
const colors = require('colors');


const crearArchivo = async(base = 5, listar, hasta)=>{
    try {
        if (listar) {
            console.log("=================".green)
            console.log('Tabla del: '.yellow,  colors.red( base ) )
            console.log("=================".green)
        }
    
        let  salida = ``;
        let consola = ``;
    
        for (let i = 1; i <= hasta; i++) {    
            salida += `${base} x ${ i } = ${ base * i }\n`;
            consola += colors.yellow(`${ colors.red(base) } x ${ i } = ${ colors.green(base * i) }\n`);
        }

        if (listar) {
            console.log( consola );

            // console.log('hello'.green); // outputs green text
            // console.log('i like cake and pies'.underline.red) // outputs red underlined text
            // console.log('inverse the color'.inverse); // inverses the color
            // console.log('OMG Rainbows!'.rainbow); // rainbow
            // console.log('Run the trap'.trap); // Drops the bass

        }
    
        // fs.writeFile( `tabla-${ base }.txt`, salida, (err)=>{
        //     if ( err ) throw err;
        // } )  
        // console.log(`tabla-${ base }.txt Creada correctamente`)
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida)
        
        return `tabla-${ base }.txt`
        
    } catch (err) {
        throw err
    }
}



module.exports = {
    crearArchivo,
}
