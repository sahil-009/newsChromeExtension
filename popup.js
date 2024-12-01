document.getElementById('fetchNews').addEventListener('click', () => {
    const query = document.getElementById('query').value;
  
    if (query) {
      const apiKey = CONFIG.API_KEY; // Accessing the API key from config.js
      fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          const newsContainer = document.getElementById('newsContainer');
          newsContainer.innerHTML = '';
          data.articles.forEach(article => {
            const newsItem = document.createElement('div');
            newsItem.innerHTML = `
              <h3>${article.title}</h3>
              <p>${article.description}</p>
              <a href="${article.url}" target="_blank">Read more</a>
            `;
            newsContainer.appendChild(newsItem);
          });
        })
        .catch(error => console.error('Error fetching news:', error));
    } else {
      alert('Please enter a topic!');
    }
  });
  