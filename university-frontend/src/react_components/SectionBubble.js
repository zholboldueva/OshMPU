import React, { useState } from 'react';
import ComplexSection from './ComplexSection';
import '../styles/base.css';
import '../styles/base-be.css';
import '../styles/reset.css';
import '../styles/awesome.css';
import '../styles/grid.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';



  const SectionBubble = () => {
    const [active, setActive] = useState(null);
    let  selectedArray ;

    const contentItemsM3 = [
      { id: "item4105",
        title: "Oame1", text: "Your Text for Oame1",listItems: [ { href: "-diplom/", title: "N1" },{ href: "som/", title: "N2" }, { href: "studilom/", title: "N3" },{ href: "studilofesm/", title: "N4" },],
      },{ id: "item4105",
      title: "Oame1", text: "Your Text for Oame1",listItems: [ { href: "-diplom/", title: "N1" },{ href: "som/", title: "N2" }, { href: "studilom/", title: "N3" },{ href: "studilofesm/", title: "N4" },],
    },
     
      // Add more content items as needed
    ]; const contentItems0 = [
      {
        id: "item4105",
        title: "Name1",
        text: "Your Text",
        listItems: [
          { href: "-diplom/", title: "N1" },
          { href: "som/", title: "N2" },
          { href: "studilom/", title: "N3" },
          { href: "studilofesm/", title: "N4" },
        ],
      },
      {
        id: "item4106",
        title: "Name2",
        text: "Your Text",
        listItems: [
          { href: "-diplom/", title: "Nn1" },
          { href: "som/", title: "Nn2" },
          { href: "studilom/", title: "Nn3" },
          { href: "studilofesm/", title: "Nn4" },
        ],
      },
      // Add more content items as needed
    ];
    const contentItems1 = [
        {
          id: "item4105",
          title: "Kame1",
          text: "Your Text",
          listItems: [
            { href: "-diplom/", title: "N1" },
            { href: "som/", title: "N2" },
            { href: "studilom/", title: "N3" },
            { href: "studilofesm/", title: "N4" },
          ],
        },
        {
          id: "item4106",
          title: "Kame2",
          text: "Your Text",
          listItems: [
            { href: "-diplom/", title: "Nn1" },
            { href: "som/", title: "Nn2" },
            { href: "studilom/", title: "Nn3" },
            { href: "studilofesm/", title: "Nn4" },
          ],
        },
        // Add more content items as needed
      ];
    const contentItems2 = [
        {
          id: "item4105",
          title: "Lame1",
          text: "Your Text",
          listItems: [
            { href: "-diplom/", title: "N1" },
            { href: "som/", title: "N2" },
            { href: "studilom/", title: "N3" },
            { href: "studilofesm/", title: "N4" },
          ],
        },
        {
          id: "item4106",
          title: "Lame2",
          text: "Your Text",
          listItems: [
            { href: "-diplom/", title: "Nn1" },
            { href: "som/", title: "Nn2" },
            { href: "studilom/", title: "Nn3" },
            { href: "studilofesm/", title: "Nn4" },
          ],
        },
        // Add more content items as needed
      ];
    const contentItems3 = [
        {
          id: "item4105",
          title: "Oame1",
          text: "Your Text",
          listItems: [
            { href: "-diplom/", title: "N1" },
            { href: "som/", title: "N2" },
            { href: "studilom/", title: "N3" },
            { href: "studilofesm/", title: "N4" },
          ],
        },
        {
          id: "item4106",
          title: "Oame2",
          text: "Your Text",
          listItems: [
            { href: "-diplom/", title: "Nn1" },
            { href: "som/", title: "Nn2" },
            { href: "studilom/", title: "Nn3" },
            { href: "studilofesm/", title: "Nn4" },
          ],
        },
        // Add more content items as needed
      ];
    
    if (active === 'M') {
      selectedArray = contentItemsM3;
    } else if (active === 'M2') {
      selectedArray = contentItems0;
    } else if (active === 'M3') {
      selectedArray = contentItems1;
    }else if (active === 'M1') {
      selectedArray = contentItems2;
    }else selectedArray = [];

    const [activeButtonIndex, setActiveButtonIndex] = useState(null);
    const handleButtonClick = (index) => {
      setActiveButtonIndex((prevIndex) => (prevIndex === index ? null : index));
     
    };
  
    const btns = ['M', 'M1', 'M2', 'M3'];
    
  
    return (
      <div className="bubble-img row copy-toggler-content">
        {btns.map((btn, index) => (
          <div key={index} className={`col-md-6 item410${index} ${index === activeButtonIndex ? 'active' : ''}`}>
            <a
              title={btn}
              role="button"
              className="toggler"
              data-toggle="collapse"
              data-target={`#item410${index}`}
              aria-expanded={index === activeButtonIndex}
              onClick={() =>{handleButtonClick(index);setActive(btn);} }
            >
              <figure>
                <FontAwesomeIcon icon={faArrowCircleDown} />
                <figcaption>{btn}</figcaption>
              </figure>
            </a>
                 
          </div>
        ))}
       <div className="content-container col-12 toggler-content" data-togglearea="content1">
      {selectedArray.map((it) => (
         <div key={it.id} id={it.id} className={`collapse'${active===it.id ? 'show': ''}`} data-togglearea-target={it.id}>
         <div className="ce-textpic ce-right ce-intext">
           <div className="ce-bodytext">
             <p>{it.text}</p>
           </div>
         </div>
         <div className="row">
           <div className="col-lg-4 mb-3">
             <a
               title={`${it.title} und ${it.text}`}
               role="button"
               className="toggler collapsed"
               data-toggle="collapse"
               data-target={`#tb${it.id}`}
               aria-expanded={it.index === it.active}
             >
               <h2>{it.title} <br/> {it.title} <em className="icon-minus"></em></h2>
             </a>
           </div>
           <div className="col-lg-8 ce-textpic ce-right ce-intext collapse show" id={`tb${it.id}`}>
             <div className="ce-bodytext">
               <ul className="list-icon list grid mb-4 mt-0">
                 {it.listItems.map((item, index) => (
                   <li key={index} className="icon-list col-6-12">
                     <a href={item.href} title={item.title}>{item.title}</a>
                   </li>
                 ))}
               </ul>
             </div>
           </div>
         </div>
       </div>
      ))}
    </div>
    </div>
    );
  };
  
  export default SectionBubble;
  

