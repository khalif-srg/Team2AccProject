import { useState } from 'react';
import { Button } from '@/components/ui/button';

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setUploadStatus('');
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      setUploadStatus('Please select an image first');
      return;
    }

    setUploading(true);
    setUploadStatus('');

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await fetch('https://ismailshareef.app.n8n.cloud/webhook-test/wedding-planner', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setUploadStatus('Image uploaded successfully!');
        console.log('Upload response:', data);
      } else {
        setUploadStatus('Upload failed. Please try again.');
      }
    } catch (error) {
      setUploadStatus('Error uploading image: ' + error.message);
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full h-[600px] flex items-stretch">
      <div className="w-full p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-wedding-blush/50 flex flex-col overflow-hidden">
        <div className="shrink-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Upload Your Inspiration
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Share photos of your dream wedding style, venue, or decor ideas
          </p>
        </div>

        <div className="flex-1 flex flex-col space-y-6 overflow-y-auto">
          {/* Image Preview */}
          {previewUrl && (
            <div className="relative w-full h-64 rounded-lg overflow-hidden border-2 border-wedding-blush shrink-0">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Upload Area */}
          <div className="flex flex-col items-center gap-4 shrink-0">
            <label
              htmlFor="image-upload"
              className="cursor-pointer w-full py-8 px-6 border-2 border-dashed border-wedding-coral rounded-lg hover:border-wedding-salmon hover:bg-wedding-blush/20 transition-all duration-200 text-center"
            >
              <div className="flex flex-col items-center gap-2">
                <svg
                  className="w-12 h-12 text-wedding-coral"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-700 font-medium">
                  {selectedImage ? selectedImage.name : 'Click to select an image'}
                </span>
                <span className="text-sm text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </span>
              </div>
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
            />

            {/* Upload Button */}
            <Button
              onClick={handleUpload}
              disabled={!selectedImage || uploading}
              className="w-full rounded-full bg-gradient-to-r from-wedding-coral to-wedding-salmon text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {uploading ? 'Uploading...' : 'Upload Image'}
            </Button>
          </div>

          {/* Status Message */}
          {uploadStatus && (
            <div
              className={`text-center p-3 rounded-lg shrink-0 ${
                uploadStatus.includes('success')
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {uploadStatus}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
