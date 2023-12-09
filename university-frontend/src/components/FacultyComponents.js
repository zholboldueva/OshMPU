// FacultyComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FacultyComponent = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/faculty/');
        setFaculty(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Faculty</h2>
      <ul>
        {faculty.map(item => (
          <li key={item.id}>
            <strong>{item.title}</strong> - {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyComponent;
