import './App.css';
import FilmList from "./filmList.jsx";
import './Header.css';
import head from './Header';
import sizer from './4f.png';
import imax from './imax.png';
import screenx from './screenx.png';
import logo from './logo.png';
import Gora from './gora.jsx';

function App() {
  return (
    <div className="App">
          <Gora />
      <FilmList />
    </div>
  );
};

export default App;
