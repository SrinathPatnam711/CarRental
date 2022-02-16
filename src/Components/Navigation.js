import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul className = 'navbar'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='About'>About</Link>
        </li>
        <li>
          <Link to='Contact'>Contact Us</Link>
        </li>
        <li>
          <Link to='Cars'>Cars</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
