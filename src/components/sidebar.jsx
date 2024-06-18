import React from 'react'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faImage ,faBullhorn,faChalkboardTeacher,faNewspaper,faBuildingUser,faCalendarDays,faChartSimple} from '@fortawesome/free-solid-svg-icons';
 import { Link } from 'react-router-dom';
 
function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <div className='wholeside'>
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <img src="logo.jpg"alt=""/><h1 className='tbi'>TBI GEC</h1> 
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
            <FontAwesomeIcon icon={faImage}style={{ color: 'rgb(87 13 147)' }}/>
            <Link to="/adgallery">Gallery</Link>
            </li>
            <li className='sidebar-list-item'>
              <FontAwesomeIcon icon={faBullhorn} style={{ color: 'rgb(87 13 147)' }}/>
                <Link to="/adannounce">Announcement
                </Link>
               
                
            </li>
            <li className='sidebar-list-item'>
            <FontAwesomeIcon icon={faChalkboardTeacher} style={{ color: 'rgb(87 13 147)' }} />
                <a href="" >
                
                 Start-Up School
                </a>
            </li>
            <li className='sidebar-list-item'>
            <FontAwesomeIcon icon={faNewspaper} style={{ color: 'rgb(87 13 147)' }} /> 
                <a href="" >
                        Blogs
                </a>
            </li>
            <li className='sidebar-list-item'>
            <FontAwesomeIcon icon={faBuildingUser} style={{ color: 'rgb(87 13 147)' }}/>
                <a href=""  >
                 Companies
                </a>
            </li>
            <li className='sidebar-list-item'>
            <FontAwesomeIcon icon={faCalendarDays} style={{ color: 'rgb(87 13 147)' }}/>
                <a href="" >
                Events
                </a>
            </li>
            <li className='sidebar-list-item'>
            <FontAwesomeIcon icon={faChartSimple}  style={{ color: 'rgb(87 13 147)' }}/>
                <a href=""  >
                 Statistics
                </a>
            </li>
        </ul>
    </aside>
    </div>
  )
}

export default Sidebar;