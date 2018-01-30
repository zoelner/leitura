import React from 'react';
import { Navbar, NavItem } from 'react-materialize';


const HeaderView = () => (
    <Navbar brand='Leitura' right className="light-blue lighten-1">
    <NavItem href='/posts'>Posts</NavItem>
  </Navbar>
)

export { HeaderView };