// ProfessorComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfessorComponent = () => {
  const [professor, setProfessor] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/professors/');
        setProfessor(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Professor</h2>
      <ul>
        {professor.map(item => (
          <li key={item.id}>
            <strong>{item.title}</strong> - {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessorComponent;
