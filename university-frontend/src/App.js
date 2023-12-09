/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/ 

// App.js

import React from 'react';
import NewsComponent from './components/NewsComponent';  // Import other components as needed
import AdministrationComponents from './components/AdministrationComponents'; 
import DepartmentComponent from './components/DepartmentComponent';
import FacultyComponents from './components/FacultyComponents';
import PageComponents from './components/PageComponents';
import ProfessorComponents from './components/ProfessorComponents';
import StudentComponents from './components/StudentComponents';



const App = () => {
  return (
    <div>
      <NewsComponent />
      <AdministrationComponents />
      <DepartmentComponent />
      <FacultyComponents />
      <PageComponents />
      <ProfessorComponents />
      <StudentComponents />
      {/* Include other components here */}
    </div>
  );
};

export default App;

