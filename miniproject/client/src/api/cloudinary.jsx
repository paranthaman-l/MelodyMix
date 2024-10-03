import toast, { Toaster } from "react-hot-toast";

export const handleProfileChange = async (e) => {
    e.preventDefault();
    const selectedImage = e.target.files[0];
    if (selectedImage) {
        const imageData = new FormData();
        imageData.append("file", selectedImage);
        imageData.append("upload_preset", "melodymix");
        try {
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/dnzd8rvd4/image/upload`,
                {
                    method: "POST",
                    body: imageData,
                }
            );
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data.secure_url);
        } catch (error) {
            console.error("Error uploading image to Cloudinary:", error);
        }
    }
};