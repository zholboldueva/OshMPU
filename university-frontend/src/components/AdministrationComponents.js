// AdministrationComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdministrationComponent = () => {
  const [administration, setAdministration] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/administration/');
        setAdministration(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Administration</h2>
      <ul>
        {administration.map(item => (
          <li key={item.id}>
            <strong>{item.title}</strong> - {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdministrationComponent;
