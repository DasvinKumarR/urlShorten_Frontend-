import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { redirectOriginalUrl } from '../api/api'; // Ensure this path is correct

const ShortUrlRedirect = () => {
  const { shortUrl } = useParams();

  useEffect(() => {
    const fetchRedirect = async () => {
      try {
        // Call the backend to get the original URL
        const response = await redirectOriginalUrl(shortUrl);
        const originalUrl = response.data; // Assuming backend returns the original URL

        // Redirect to the original URL
        window.location.href = originalUrl;
      } catch (error) {
        console.error('Error fetching redirect URL:', error);
        // Optionally handle errors, e.g., show an error page or message
        window.location.href = '/'; // Redirect to home or an error page
      }
    };

    fetchRedirect();
  }, [shortUrl]);

  return <div>Loading...</div>; // Optionally show a loading spinner
};

export default ShortUrlRedirect;
