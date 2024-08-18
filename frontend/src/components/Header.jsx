import './Header.css';
function Header()
{
 return(
    <div className="header">
        <div className="logo">MIC</div>
        <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
 )   
}
export default Header;