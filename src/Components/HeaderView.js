import React from 'react';
import { Navbar, NavItem } from 'react-materialize';


const HeaderView = () => (
    <Navbar brand='Leitura' right className="light-blue lighten-1">
    <NavItem href='/'>Home</NavItem>
  </Navbar>
)

export { HeaderView };