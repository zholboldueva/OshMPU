// NewsComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsComponent = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/news/');
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>News</h2>
      <ul>
        {news.map(item => (
          <li key={item.id}>
            <strong>{item.title}</strong> - {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;
