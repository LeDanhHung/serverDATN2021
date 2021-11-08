import multer from 'multer';
import path  from 'path';
const uploadFile = path.resolve(path.join(__dirname, '../uploads'));

if (!fs.existsSync(uploadFile)) {
    fs.mkdirSync(uploadFile, { recursive: true });
  }
  const storage = multer.diskStorage({ 
    destination: function(req,file,cb){
      cb(null,path.join(__dirname,'../public/uploads'));
    },
    filename: function(req,file,cb){
      cb(null,new Date().toISOString().replace(/:/g,'-')+file.originalname);
    }
  })
  export {storage}