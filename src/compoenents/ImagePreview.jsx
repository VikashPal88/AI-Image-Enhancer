import React from 'react';
import Loading from './Loading';

const ImagePreview = ({ loading, uploaded, enhanced }) => {
    return (
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto'>
            {/* Original Image */}
            <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
                <h2 className='text-xl font-semibold text-center bg-gray-800 text-white py-2'>
                    Original Image
                </h2>

                {uploaded ? (
                    <img
                        src={uploaded}
                        alt="Original"
                        className='w-full h-80 object-cover'
                    />
                ) : (
                    <div className='flex items-center justify-center h-80 bg-gray-200'>
                        No Image Selected
                    </div>
                )}
            </div>

            {/* Enhanced Image */}
            <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
                <h2 className='text-xl font-semibold text-center bg-blue-800 text-white py-2'>
                    Enhanced Image
                </h2>

                {enhanced && !loading ? (
                    <>
                        <img
                            src={enhanced}
                            alt="Enhanced"
                            className='w-full h-80 object-cover'
                        />
                        <div className='text-center py-2'>
                            <a
                                href={enhanced}
                                download="enhanced-image.jpg"
                                className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
                            >
                                Download
                            </a>
                        </div>
                    </>
                ) : loading ? (
                    <Loading />
                ) : (
                    <div className='flex items-center justify-center h-80 bg-gray-200'>
                        No Enhanced Image
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImagePreview;