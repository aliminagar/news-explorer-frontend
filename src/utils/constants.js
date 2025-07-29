// constants.js

// NewsAPI endpoint from .env file
export const newsApiUrl = import.meta.env.VITE_NEWS_API_URL;

// NewsAPI key from .env file
export const apiKey = import.meta.env.VITE_NEWS_API_KEY;

// Optional: your local backend (if used)
export const baseUrl = "http://localhost:3002"; // or remove if not used

// Utility: format YYYY-MM-DD
export const formatDate = (date) => date.toISOString().split("T")[0];
