import React, { useState } from 'react';

const Upload = () => {
    const [status, setStatus] = useState('');
    const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            uploadFile(file);
        }
    };

    const uploadFile = async (file) => {
        setIsUploading(true);
        setStatus('Uploading...');

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://127.0.0.1:5555/upload', {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();
            setStatus(result.message || result.error);
        } catch (error) {
            setStatus('Error: ' + error.message);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen p-4 bg-gray-100">
            <h1 className="mb-7 text-3xl font-bold md:text-3xl border-b border-blue-500 text-blue-500 inline-block pb-2" style={{ width: 'fit-content' }}>
                Data Upload Center
            </h1>
            <div className="flex flex-col items-center justify-center flex-grow">
                <div className="mb-6">
                    {isUploading ? (
                        <img
                            src="https://kam.co.ke/wp-content/uploads/2022/02/KAM-Logo.jpg"
                            alt="Uploading"
                            className="w-auto h-60 object-cover animate-pulse"
                        />
                    ) : (
                        <img
                            src="https://kam.co.ke/wp-content/uploads/2022/02/KAM-Logo.jpg"
                            alt="Logo"
                            className="w-auto h-60 object-cover"
                        />
                    )}
                </div>
                <input
                    type="file"
                    accept=".xlsx"
                    onChange={handleFileChange}
                    className="mb-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="mt-4 text-lg font-semibold text-gray-700">{status}</div>
            </div>
        </div>
    );
};

export default Upload;
