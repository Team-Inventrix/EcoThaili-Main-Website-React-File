import { Link } from 'react-router-dom';
import { navigation_items,navigation_logos } from './data/navigation_data';
import useResponsiveView from './useResponsiveView';

const NavigationBar = ({active_item}) => {

  const show_nav_logos = Object.entries(navigation_logos).map(([key, value], index) => (
    <img src={value.src} alt={value.alt} key={index}/>
  ))
  const show_nav_list = Object.entries(navigation_items).map(([item, path], index) => (
    <Link to={path} key={index}>
      <li className={`${active_item === item ? 'active':''}`}>
        {item}
      </li>
    </Link>
  ))

  return (
    <nav>
      <div className='nav-left'>
        {show_nav_logos}
      </div>
      <div className='nav-right'>
        <ul>
        {useResponsiveView() == "mobile" && <ion-icon name="menu-outline" style={{fontSize:"20pt",cursor:"pointer"}}></ion-icon>}
          {show_nav_list}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
