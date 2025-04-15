import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enhancedImageAPI } from '../utils/enhanceImageApi'

const Home = () => {

    const [uploadImage, setUploadImage] = useState()
    const [enhancedImage, setEnhancedImage] = useState(null)
    const [loading, setLoading] = useState(false)

    const UploadImageHandler = async (file) => {
        setUploadImage(URL.createObjectURL(file));
        setLoading(true);

        try {
            const enhancedURL = await enhancedImageAPI(file);
            setEnhancedImage(enhancedURL);
            setLoading(false);
        } catch (error) {
            alert("Error while enhancing the image. Please try again later.")
        }
    }


    return (
        <>
            <ImageUpload uploadImageHandler={UploadImageHandler} />
            <ImagePreview
                loading={loading}
                uploaded={uploadImage}
                enhanced={enhancedImage?.image}
            />
        </>


    )
}

export default Home
