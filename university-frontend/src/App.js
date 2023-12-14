
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Header from './react_components/Header';

import TopBar2 from './react_components/TopBar2';
import Slider from './react_components/Slider';
import SectionStart from './react_components/SectionStart';
import Section2 from './react_components/Section2';
import SliderEvents from './react_components/SliderEvents';



const App = () => {
  const slides = [
    {
      imageSrc: '/photos/slide8.jpg',
      altText: 'Foto:',
      title: 'Quelle:',
      text: 'La',
      link: 'studium',
    },
    {
        imageSrc: '/photos/slide7.jpg',
        altText: 'Foto:',
      title: 'Quelle:',
      text: 'ka',
      link: 'studium',
      },
      {
        imageSrc: '/photos/slide3.jpg',
        altText: 'Foto:',
        title: 'Quelle:',
        text: 'da',
        link: 'studium',
      },
      {
        imageSrc: '/photos/slide1.jpg',
        altText: 'Foto:',
        title: 'Quelle:',
        text: 'ha',
        link: 'studium',
      },
    // Add more slides with similar structure
    //    <Slider slides={slides}/>
  ];
  return (
    <Provider store={store}>
          <TopBar2 /> {/* Use the TopBar component */}
          <Header />
      
      <Slider slides={slides}/>
      <SectionStart/>
      <Section2/>
      <SliderEvents/>
    </Provider>
   
  );
};

///////////////////////////////////////////////////////////////////////////////
/*
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
     
    </div>
  );
};
*/



export default App;



