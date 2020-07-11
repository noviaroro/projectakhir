import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Home, About, Users } from './views';
import './App.css';
// app menampilkan header judul resto, body menampilkan menu yang tersedia yaitu menu makanan, form pesanan, dan about
// menu makanan yaitu list menu makanan yang tersedia hari ini
// form pesanan berisi form yang menunjukan pesananan dan nomer meja
// about yaitu deksripsi tentang  resto dan suhu pegawai yg bekerja
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Welcome To Project Akhir <br/>
          Resto React JS
        </header>
        <div className="App-body">
          Pilih Menu :
        <ul>
            <li><Link to="/">Menu Makanan</Link></li>
            <li><Link to="/topics">Form Pesanan</Link></li>
            <li><Link to="/about">About Resto</Link></li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/topics">
            <Users/>
          </Route>
        </Switch>
        <footer className="App footer">by Novia Roro</footer>
      </div>
    </Router>
  );
}

export default App;