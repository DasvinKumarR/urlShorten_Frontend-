import React, { useState } from 'react';
import { shortenUrl } from '../api/api'; // Make sure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ShortenUrl = () => {
  // use states initiated for urls
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  // function to handle shorten url functionality
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await shortenUrl({ originalUrl });
      setShortUrl(response.data.shortUrl); 
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
    }
  };
  // UI code for shorten url page
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Shorten URL</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="originalUrl" className="form-label">Original URL</label>
          <input
            type="text"
            className="form-control"
            id="originalUrl"
            placeholder="Enter the URL to shorten"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Shorten</button>
      </form>
      {shortUrl && (
        <div className="mt-3">
          <p>
            Short URL: <a href={shortUrl} className="link-primary" target="_blank" rel="noopener noreferrer">{shortUrl}</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default ShortenUrl;
