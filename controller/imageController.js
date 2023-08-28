import File from "../models/file.js";

const API_URL = "";

export const uploadImage = async(req, res) => {
    const fileobj = {
        path: req.file.path,
        name: req.file.originalname,
    }
    try{
        const file = await File.create(fileobj);
        res.status(200).json({
            path: `${API_URL}/file/${file._id}`
        });
    }
    catch(error){
        console.log("Error in image controller");
        res.status(500).json({error: error.message})
    }
}

export const downloadImage = async(req, res) => {
    try{
        const file = await File.findById(req.params.fileId);

        file.downloadContent++;

        await file.save();

        res.download(file.path, file.name);

    }
    catch(error){
        console.log("Error in download controller");
        res.status(500).json({error: error.message})
    }
}

