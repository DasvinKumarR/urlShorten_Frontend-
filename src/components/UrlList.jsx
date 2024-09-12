import React, { useEffect, useState } from 'react';
import { getAllUrls } from '../api/api';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const UrlList = () => {
  // use state initiated for urls
  const [urls, setUrls] = useState([]);
  // useeffect hook initated to render when urls are fetched
  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await getAllUrls();
        setUrls(response.data);
      } catch (error) {
        console.error('Error fetching URLs', error);
      }
    };

    fetchUrls();
  }, []);
  // UI code for urls list page
  return (
    <div className="container mt-5">
      <h2 className="mb-4">All URLs</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Short URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {urls.length > 0 ? (
            urls.map((url) => (
              <tr key={url._id}>
                <td>
                  <a href={url.originalUrl} target="_blank" rel="noopener noreferrer">
                    {url.originalUrl}
                  </a>
                </td>
                <td>
                  <a href={`/${url.shortUrl}`} className="link-primary">
                    {url.shortUrl}
                  </a>
                </td>
                <td>{url.clicks}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">No URLs found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UrlList;
