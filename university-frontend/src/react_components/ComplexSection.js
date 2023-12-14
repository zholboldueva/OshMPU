import React, { useState,useEffect  } from 'react';
import '../styles/base.css';
import '../styles/base-be.css';
import '../styles/reset.css';
import '../styles/awesome.css';
import '../styles/grid.css';


const ComplexSection = (title) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

 

  return (
    <div id="c20287" class="row"> 
			<div class="col-lg-4 mb-3"> 
       <a title={title} role="button" className={`toggler ${isCollapsed ? 'collapsed' : ''}`}
        onClick={handleToggle}
        data-toggle="collapse"
        data-target={`#${title.replace(/\s+/g, '')}`}
        aria-expanded={!isCollapsed}
      >
      <h2>{title} <em className={`icon-${isCollapsed ? 'plus' : 'minus'}`}></em></h2></a> </div>

      <div class="col-lg-8 ce-textpic ce-right ce-intext collapse show" id="tb20287"> 
     	<div class="ce-bodytext"> <ul class="list-icon list grid mb-4 mt-0">
       
       <li class="list-icon-arrow col-6-12">
        <a href="studium"
              title='child'>child</a></li>
             			 </ul> </div>
                 </div>					 
      
      </div>
   
  );
};

export default ComplexSection;
