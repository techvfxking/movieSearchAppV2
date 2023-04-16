import React from 'react'
import Search from './Search';
import Movies from './Movies';
import NavbarComponent from './NavbarComponent';

const Home = () => {

  return (
    <div>
      <NavbarComponent />
      <Search />
      <Movies />
    </div>
  )
}

export default Home