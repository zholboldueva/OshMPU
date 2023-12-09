// StudentComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentComponent = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/students/');
        setStudent(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Student</h2>
      <ul>
        {student.map(item => (
          <li key={item.id}>
            <strong>{item.title}</strong> - {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentComponent;
