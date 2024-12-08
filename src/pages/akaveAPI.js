import axios from 'axios';
import FormData from 'form-data'; // This is still used for file uploads in the browser
const API_BASE_URL = 'http://localhost:8000';  // Update if using a different host

// Generic API request function
export async function apiRequest(method, endpoint, data = null) {
    try {
      const response = await axios({
        method,
        url: `${API_BASE_URL}${endpoint}`,
        data,
      });
      console.log(`API Response from ${endpoint}:`, response.data); // Log the response
      return response.data;
    } catch (error) {
      console.error(`API Error from ${endpoint}:`, error.response ? error.response.data : error.message);
      throw new Error(error.response ? error.response.data.error : error.message);
    }
  }
  

// Bucket operations
export const createBucket = async (bucketName) => {
    try {
      const response = await apiRequest('POST', '/buckets', {bucketName});
  
      // Adjust based on the actual response format
      if (response.success && response.data) {
        return response.data;
      } else if (response.error) {
        throw new Error(response.error);
      } else {
        throw new Error('Unexpected API response format');
      }
    } catch (error) {
      console.error('Error creating bucket:', error.message);
      throw error;
    }
  };
  
  
export const listBuckets = () => apiRequest('GET', '/buckets');
export const getBucketDetails = (bucketName) => apiRequest('GET', `/buckets/${bucketName}`);

// File operations for React (no fs, use File and FormData instead)
export const uploadFile = async (bucketName, file) => {
  const form = new FormData();
  form.append('file', file);

  return axios.post(`${API_BASE_URL}/buckets/${bucketName}/files`, form, {
    headers: {
        'Content-Type': 'multipart/form-data',  // No need for getHeaders in the browser
      },
  });
  
};

export const downloadFile = async (bucketName, fileName) => {
  const response = await axios.get(`${API_BASE_URL}/buckets/${bucketName}/files/${fileName}/download`, {
    responseType: 'blob',
  });

  // Trigger download in the browser
  const link = document.createElement('a');
  link.href = URL.createObjectURL(response.data);
  link.download = fileName;
  link.click();
};