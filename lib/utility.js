import { fileURLToPath } from 'url';
import { dirname } from 'path';

import path from 'path';
import fs from 'fs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create README file function
function saveFile(data, filename) {

    let dateStr = new Date().toJSON();
    dateStr = dateStr.replace(/:/ig, '-');



    //create directory
    let saveDir = path.join(__dirname, "..\\examples");

    fs.mkdir(saveDir, { recursive: true }, (err) => {
        if (err)
        {
            console.error(err);
        }
        else
        {
            //save README file
            let filePath = saveDir + "\\" + filename + dateStr + ".svg";

            fs.writeFile(filePath, data, (err) => {
                err ? console.error(err) : console.log('Svg file successfully saved:\n\n' + filePath) 
            });
        }
    });
}


export {saveFile};