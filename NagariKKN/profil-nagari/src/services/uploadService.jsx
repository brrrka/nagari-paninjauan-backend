/* eslint-disable no-useless-catch */
const UPLOAD_URL = '/api/upload';

class UploadService {
    async uploadImage(file) {
        try {
            console.log('UploadService: Starting upload for file:', file.name);

            const formData = new FormData();
            formData.append('image', file);

            console.log('UploadService: FormData created, making request to:', `${UPLOAD_URL}/image.php`);

            const response = await fetch(`${UPLOAD_URL}/image.php`, {
                method: 'POST',
                credentials: 'include',
                body: formData,
                // Jangan set Content-Type untuk FormData, biar browser yang handle
            });

            console.log('UploadService: Response status:', response.status);

            if (!response.ok) {
                const errorText = await response.text();
                console.error('UploadService: HTTP error response:', errorText);
                throw new Error(`HTTP ${response.status}: ${errorText}`);
            }

            const data = await response.json();
            console.log('UploadService: Response data:', data);

            if (!data.success) {
                throw new Error(data.error || 'Upload failed');
            }

            return data;
        } catch (error) {
            console.error('UploadService: Error during upload:', error);
            throw error;
        }
    }
}

export const uploadService = new UploadService();