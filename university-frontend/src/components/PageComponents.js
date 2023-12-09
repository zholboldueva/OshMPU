// PageComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PageComponents = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/pages/');
        setPages(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Pages</h2>
      <ul>
        {pages.map(item => (
          <li key={item.id}>
            <strong>{item.title}</strong> - {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageComponents;
