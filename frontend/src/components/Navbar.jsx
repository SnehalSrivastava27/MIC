import './Navbar.css'
export default function Navbar()
{
    return(
        <div className="Navbar">
            <ul>
                <li><a href="Home">Home</a></li>
                <li><a href="About">About us</a></li>
                <li><a href="Contact">Contact us</a></li>
                <li><a href="Events">Events</a></li>
            </ul>
        </div>
    )
}