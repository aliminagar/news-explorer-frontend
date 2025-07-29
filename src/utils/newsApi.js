import { newsApiUrl, apiKey, formatDate } from "./constants";
import mockSavedArticles from "./mockSavedArticles";

// Fetch articles from NewsAPI for the past 7 days
export const fetchNewsArticles = async (query) => {
  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);

  const url = `${newsApiUrl}?q=${encodeURIComponent(query)}&from=${formatDate(
    sevenDaysAgo
  )}&to=${formatDate(today)}&pageSize=100&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `News API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("News API failed, using mock data for demo:", error);

    // Convert saved articles format to search results format
    const mockArticles = mockSavedArticles.map((article) => ({
      title: article.title,
      description: article.description,
      publishedAt: article.publishedAt,
      source: article.source,
      urlToImage: article.urlToImage,
      url: article.url,
    }));

    // Filter mock articles by query for demo purposes
    const filteredMockArticles = mockArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.description.toLowerCase().includes(query.toLowerCase())
    );

    // If no matches, return all mock articles
    return filteredMockArticles.length > 0
      ? filteredMockArticles
      : mockArticles;
  }
};
