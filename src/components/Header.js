import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';

class Header extends Component {
  render() {
    return (
      <header>
      <Link to="/"><span class="logo">Shorter</span></Link>
      </header>
    );
  }
}

export default Header;
