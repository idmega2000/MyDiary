
import {getFileName} from '../helpers/utils';
import fs from 'fs';
import mkdirp  from 'mkdirp';


const folder = './server/uploads/diary/';



    export const uploadImage = (req, res, next) => {
        if (!req.files.length){
            return next();
        }
        mkdirp.sync(folder);
        
        let buffer = req.files[0].buffer;
        // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
        let bitmap = new Buffer(buffer);
        let fileName = getFileName(req.files[0].originalname);
        let fileStoreage = folder + fileName;
        // write buffer to file
        //fs.writeFileSync(file, bitmap);

        //fs.writeFile should be used later on in the project to load image 
        //asynchronously and if there is error in loading the image should be deleted
        // and address removed from the databae
        fs.writeFileSync(fileStoreage, bitmap);
        res.locals.fileName = fileName;
       
        if(res.locals.oldDiaryImage){
            fs.unlink(`${folder}${res.locals.oldDiaryImage}`, (err) => {
                if (err) (console.log(err))
              });
        }
        return next()
    }
