# 📰 News Explorer

> A modern React news app that integrates with NewsAPI and simulates backend features like login, article saving, and deletion.

---

## 📌 Project Overview

**News Explorer** lets users search the latest news articles by keyword, see dynamically rendered results, and simulate authentication and saved content functionality. The app handles real-time API calls, error states, and UI logic with a smooth, responsive experience.

---

## 🛠️ Tech Stack

- **React (with Vite)**
- **JavaScript (ES6+)**
- **CSS3 / BEM**
- **NewsAPI.org** for third-party data
- **Mocked API using Promises**
- **LocalStorage for state persistence (demo)**
- **Responsive layout via Figma design**

---

## ✨ Features

- 🔎 Search articles by keyword from the past 7 days
- ⏳ Preloader animation while fetching data
- ❌ “Nothing Found” state and full error handling
- 📃 Show More button loads results in sets of 3
- 🔐 Simulated login/signup using mock credentials
- 🧠 Save/delete article functionality (mocked)
- 🔄 Token check on app load
- 📱 Fully responsive layout

---

## 📸 Screenshots

> _(Insert screenshots or deployment link previews here if available)_

---

## 📁 Project Structure

📦 src/
├── components/
│ ├── App.jsx
│ ├── Header, Footer, Main, SearchForm...
│ └── NewsCardList, NewsCard, Preloader, NoResults
├── contexts/
│ └── CurrentUserContext.js
├── utils/
│ ├── newsApi.js (NewsAPI requests)
│ ├── MainApi.js (simulated backend)
│ ├── constants.js
│ └── mockSavedArticles.js
├── hooks/
│ └── useFormAndValidation.js

markdown
Copy
Edit

---

## 🔑 NewsAPI Setup

- API Endpoint: `https://newsapi.org/v2/everything`
- Required Parameters:
  - `q` – Search query
  - `apiKey` – Your NewsAPI key
  - `from` – 7 days ago
  - `to` – Today
  - `pageSize` – 100
- Development vs Production:

```js
const newsApiUrl = process.env.NODE_ENV === "production"
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";
🧪 Simulated Backend
All backend interactions such as:

signin, signup

checkToken

getSavedArticles, saveArticle, deleteArticle

are mocked in MainApi.js using Promise.resolve() and stored demo data from mockSavedArticles.js.

🚀 Deployment Links
🛠️ These will be filled in after deployment.

✅ GitHub Repo: REPLACE_ME

✅ GitHub Pages Link: REPLACE_ME

✅ Netlify Deployment: REPLACE_ME

✅ Pull Request (Stage 1): REPLACE_ME

⚙️ How to Run Locally
bash
Copy
Edit
git clone https://github.com/YOUR_USERNAME/news-explorer.git
cd news-explorer
npm install
npm run dev
👤 Author
Alireza Minagar, MD, MBA, MS Bioinformatics
🧠 Neurologist | 💻 Software Engineer | 🧬 Bioinformatician | 📚 Medical Writer

📝 License
This project is for educational purposes as part of the TripleTen Software Engineering Program.
```
