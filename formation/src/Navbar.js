import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <div>
        <a href="#">Omzo blog</a>
      </div> */}
      <ul className="liens">
      <li>
          <a href="" className="liene">SamaBlog</a>
        </li>
        <li>
          <a href="" className="lien1">Acceuil</a>
        </li>
        <li>
          <a href="" className="lien2">Creer article</a>
        </li>

      </ul>
    </div>
  );
};

export default Navbar;
