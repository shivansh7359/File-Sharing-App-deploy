import multer from "multer";


const upload = multer({dest: "uploads"});
// define path were to upload i.e --> uploads
//dest means upload to dest: i=upload


export default upload;