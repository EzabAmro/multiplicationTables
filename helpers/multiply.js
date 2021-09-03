const fs = require('fs');
const colors = require('colors');

const createFile = async (base, list, until) => {

    const fileName = `./outputs/table-${base}.txt`;
    let output = "";
    
    //for (let i = 1; i < 11; i++) console.log(`5 X ${i} = ${five * i}`);
    for (let i = 1; i <= until; i++) output += `${base} X ${i} = ${base * i}\n`;
    
    if (list) {
        console.log("****************");
        console.log(`  Tabla del ${base}:  `);
        console.log("****************");
        console.log(output);
    }

    /* fs.writeFile("table-5", output, (error) => {
        if (error) throw error;
        console.log("Data saved successfully");
    }); */

    //Funciona igual que el fs.writeFile() conla diferencia que el error se maneja mediante un try {} catch {}
    try {
        await fs.writeFileSync(fileName, output);
        return fileName;
    } catch (error) {
        throw error;
    }

}

module.exports = {
    functionCreateFile: createFile
};