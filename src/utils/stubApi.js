// src/utils/stubApi.js

import mockSavedArticles from "./mockSavedArticles.js";

export const authorize = (email, password) => {
  return Promise.resolve({ token: "mock-token" });
};

export const checkToken = (token) => {
  return Promise.resolve({
    _id: "fake-user-id",
    name: "Mock User",
    email: "mock@demo.com",
  });
};

export const signup = (name, email, password) => {
  return Promise.resolve({ message: "Signup successful" });
};

export const getSavedArticles = () => {
  return Promise.resolve(mockSavedArticles);
};

export const saveArticle = (article) => {
  return Promise.resolve({ ...article, _id: Date.now().toString() });
};

export const deleteArticle = (articleId) => {
  return Promise.resolve({ message: "Article deleted" });
};
