// DepartmentComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DepartmentComponent = () => {
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/departments/');
        setDepartment(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Department</h2>
      <ul>
        {department.map(item => (
          <li key={item.id}>
            <strong>{item.title}</strong> - {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentComponent;
