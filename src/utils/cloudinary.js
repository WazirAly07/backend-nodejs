import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePath) return null;
        //uppload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        })
        //file has been uploaded on cloudinary so we can remove it from local storage
        console.log("file uploaded on cloudinary successfully");
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); //removing the file from local storage
        return null;
    }
}
export {uploadOnCloudinary};
