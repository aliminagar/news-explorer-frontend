// src/utils/stubApi.js

// In-memory storage for saved articles
let savedArticlesStorage = [];

export const authorize = () => {
  return Promise.resolve({ token: "mock-token" });
};

export const checkToken = () => {
  return Promise.resolve({
    _id: "fake-user-id",
    name: "Mock User",
    email: "mock@demo.com",
  });
};

export const signup = () => {
  return Promise.resolve({ message: "Signup successful" });
};

export const getSavedArticles = () => {
  return Promise.resolve([...savedArticlesStorage]);
};

export const saveArticle = (token, article) => {
  const savedArticle = {
    ...article,
    _id: Date.now().toString(),
    owner: "fake-user-id",
  };
  savedArticlesStorage.push(savedArticle);
  return Promise.resolve(savedArticle);
};

export const deleteArticle = (token, articleId) => {
  savedArticlesStorage = savedArticlesStorage.filter(
    (article) => article._id !== articleId
  );
  return Promise.resolve({ message: "Article deleted" });
};
