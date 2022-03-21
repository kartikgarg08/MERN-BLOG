import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './sidebar.css';

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories');
      setCats(res.data);
    };
    getCats();
  }, []);
  
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle"> ABOUT ME </span>
          <img
            src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg" 
            alt=""
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Sint aliquam ea incidunt autem recusandae doloribus illo 
            soluta voluptatibus. Mollitia quas atque consectetur ist
          </p>
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle"> CATEGORIES </span>
          <ul className="sidebarList">
            {cats.map( (c) => (
              <Link to={`/?cat=${c.name}`} className="link">
                <li className="sidebarListItem"> { c.name } </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle"> FOLLOW US </span>
          <div className="sidebarSocial">
            <i class="sidebarIcon fa-brands fa-facebook-square"></i>
            <i class="sidebarIcon fa-brands fa-twitter-square"></i>
            <i class="sidebarIcon fa-brands fa-pinterest-square"></i>
            <i class="sidebarIcon fa-brands fa-instagram-square"></i>
          </div>
        </div>
    </div>
  );
}

export default Sidebar