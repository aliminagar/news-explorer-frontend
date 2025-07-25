import { newsApiUrl, apiKey, formatDate } from "./constants";

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
    console.error("Failed to fetch articles:", error);
    throw new Error("Unable to fetch articles. Please try again later.");
  }
};
