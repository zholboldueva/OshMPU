import React, { useState,useCallback  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/base.css';
import '../styles/base-be.css';
import '../styles/reset.css';
import '../styles/awesome.css';
import classnames from 'classnames';

  const Header = () => {
    const [activeNavItem, setActiveNavItem] = useState(null);
    const [activeSubItem, setActiveSubItem] = useState(null); // New state for active subItem
    const [isButtonClicked, setIsButtonClicked] = useState(false);
  
    const handleNavItemClick = useCallback(
      (event, index) => {
        event.preventDefault(); // Prevent default link behavior
        setActiveNavItem((prevActiveNavItem) =>
          index === prevActiveNavItem ? null : index
        );
        setIsButtonClicked(false);
      },
      [setActiveNavItem, setIsButtonClicked]
    );
  
    const handleSubItemClick = useCallback(
      (event, subItem) => {
        event.preventDefault(); // Prevent default link behavior
        setActiveSubItem((prevActiveSubItem) =>
        subItem.id === (prevActiveSubItem?.id || null) ? null : subItem
        );
      },
      [setActiveSubItem]
    );
  
    const navItems = [
      {
        id: 1,
        title: 'Studium',
        subItems: [
          { id: 1, title: 'Studienangebot', 
          subSubItems: ['Bachelor / Diplom', 'Master', 'Mit Unternehmen studieren', 'Internationale Studiengänge', 'Orientierungsstudium'] },
          // Add more subItems as needed
        ],
      },
      {
        id: 2,
        title: 'About Us',
        subItems: [
          { id: 1, title: 'Menu 1', subSubItems: ['Item 1', 'Item 2', 'Item 3'] },
          { id: 2, title: 'Menu 2', subSubItems:['Item 1'] },
        ],
      },
      {
          id: 3,
          title: '3',
          subItems: [
            {  id: 1, title: 'Menu 1', subSubItems: ['Item 1', 'Item 2', 'Item 3'] },
            { id: 2, title: 'Menu 2', subSubItems: ['Item 1'] },
            { id: 3, title: 'Menu 3', subSubItems: ['Item 1', 'Item 2', 'Item 3', 'Item 4'] },
          ],
        },
        {
          id: 4,
          title: '4',
          subItems: [
            {  id: 1, title: 'Menu 1', subSubItems: ['Item 1', 'Item 2', 'Item 3'] },
            { id: 2, title: 'Menu 2', subSubItems: ['Item 1'] },
            { id: 3, title: 'Menu 3', subSubItems: ['Item 1', 'Item 2', 'Item 3', 'Item 4'] },
          ],
        },
      // Add more navItems as needed
    ];
  
    return (
      <header id="header" className="menu-right menu-mega">
      <div className="content-container">
        <div className="pt-lg-2">
          <div className="d-block pr-5">
            <div id="logo">
              <div className="d-inline">
                <img src="/photos/gerb.png" alt="OshSPU Logo" />
              </div>
            </div>
          </div>
          <div className="pb-3 d-block">
            <div id="main-menu">
              <nav>
                <ul className="level-0">
                  {navItems.map((navItem, index) => (
                    <li key={navItem.id} className="mega-menu-item">
                      <a
                        href={`/${navItem.title.toLowerCase()}`}
                        title={navItem.title}
                        className={classnames('icon-after', {
                          collapsed: index === activeNavItem,
                        })}
                        onClick={(event) => handleNavItemClick(event, index)}
                        aria-label="Element öffnen"
                        aria-expanded={index === activeNavItem}
                      >
                        <span>{navItem.title}</span>
                      </a>
                      <ul
                        className={classnames('mega-menu-content', {
                          open: index === activeNavItem,
                        })}
                        id={`menu-level-${navItem.id}`}
                      >
                        {navItem.subItems &&
                          navItem.subItems.map((subItem) => (
                            <li key={subItem.id} className=" col-md-4 extended">
                              {subItem && subItem.title && (
                                <div className=" showsubitems">
                                  <div className=" row">
                                  <div className=" col-md-6">
                                  </div>
                                  <a
                                    className={classnames({
                                      collapsed: subItem.id === (activeSubItem?.id|| null) ,
                                    })}
                                    type="button"
                                    onClick={(event) =>
                                      handleSubItemClick(event,subItem)
                                    }
                                    data-toggle="collapse"
                                    data-menu-level={`menu-level-${navItem.id}`}
                                    data-target={`#menu-level-${navItem.id}`}
                                    aria-multiple-elements="false"
                                    aria-expanded={
                                      subItem === (activeSubItem?.id || null) ? 'true' : 'false'}
                                    aria-label="Element öffnen"
                                  >
                                    <span>{subItem.title}</span>
                                    <em className="icon-right-open"></em>
                                  </a>
                                </div>
                                <div className="col-md-6">
                                  {subItem.subSubItems &&
                                    subItem.id === (activeSubItem?.id || null) && (
                                      <ul className={`collapse level-2 show`}>
                                        {subItem.subSubItems.map(
                                          (subSubItem) => (
                                            <li key={subSubItem}>
                                              <a
                                                href={`/${navItem.title.toLowerCase()}/${subItem.title.toLowerCase()}/${subSubItem.toLowerCase()}`}
                                                title={subSubItem}
                                                className="text-wrap sub"
                                              >
                                                <span>{subSubItem}</span>
                                                <em className="icon-right-open"></em>
                                              </a>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    )}
                                  </div>
                                </div>
                              )}
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    );
  };
  
  export default Header;