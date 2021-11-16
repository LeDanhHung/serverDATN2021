import multer from 'multer';
import path  from 'path';
import fs from 'fs';
const __dirname = path.resolve();
const uploadFile = path.resolve(path.join(__dirname, '../auth/public/uploads'));

if (!fs.existsSync(uploadFile)) {
    fs.mkdirSync(uploadFile, { recursive: true });
  }
  const storage = multer.diskStorage({ 
    destination: function(req,file,cb){
      cb(null,path.join(__dirname,'../auth/public/uploads'));
    },
    filename: function(req,file,cb){
      cb(null,new Date().toISOString().replace(/:/g,'-')+file.originalname);
    }
  })
  export {storage}