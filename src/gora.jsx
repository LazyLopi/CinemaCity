import './App.css';
import './Header.css';
import head from './Header';
import sizer from './4f.png';
import imax from './imax.png';
import screenx from './screenx.png';
import logo from './logo.png';
import map from './locationpicker-map-marker.png';
import user from './user-icon.png';

function Gora() {
  return (
      <div>
            <div className="aa">
          <header className="gora">
            <img className="logo" src={logo}/>
            </header>
            <div className="mapa">
              <a href="#" className="goralink"><img src={map} className="map" alt="d" /> Wybierz swoje kino </a>
            </div>
              <div className="goraa">
              <a href="#" className="goralink1"><img src={user} className="user" alt="d" /> Logowanie </a>
            <a href="#" className="goralink1"> Rejestracja </a>
              <input type="text" className="szukaj" placeholder="Szukaj.."/>
            <select name="jezyk" className="jezyk" id="jezyk">
            <option value="pl">PL</option>
            <option value="en">EN</option>
            </select>
              </div>
          </div>

          <footer className="footer">
              <nav className="nav">
                  <a href="#" className="nav-link inactive"><b>REPERTUAR</b></a>
                  <a href="#" className="nav-link inactive"><b>OFERTY</b></a>
                  <a href="#" className="nav-link inactive"><b>PREZENTY</b></a>
                  <a href="#" className="nav-link inactive"><b>BAR</b></a>
                  <a href="#" className="nav-link inactive"><b>SZKOLY</b></a>
                  <a href="#" className="nav-link inactive"><b>BLOG</b></a>
                  <a href="#" className="nav-link inactive"><b>UNLIMITED</b></a>
                  <a href="#" className="nav-link inactive"><img className="sizer" src={sizer} alt='a' /></a>
                  <a href="#" className="nav-link inactive"><img className="imax" src={imax} alt='b' /></a>
                  <a href="#" className="nav-link inactive"><img className="screenx" src={screenx} alt='c' /></a>
                  <a href="#" className="nav-link inactive"><b>VIP</b></a>
              </nav>
          </footer>
          </div>
  );
};

export default Gora;