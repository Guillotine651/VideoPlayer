import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; //filesystem

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadonCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File has been uploaded on cloudinary",response);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //removethefile on our server as the operation failed
    return null
  }
};

export {uploadonCloudinary}
