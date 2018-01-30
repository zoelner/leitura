import React from 'react';
import { Footer } from 'react-materialize';

const FooterView = () => (
    <Footer className="light-blue lighten-1" copyrights="© 2018 Everton Gabriel Zoelner" links={
        <ul>
            <li><a className="grey-text text-lighten-3" href="/posts">Posts</a></li>
            <li><a className="grey-text text-lighten-3" href="/categories">Categorias</a></li>
        </ul>
    }>
        <h5 className="white-text">React e Redux </h5>
        <p className="grey-text text-lighten-4">Aplicativo desenvolvido para formação no curso React Developer da Udacity</p>

    </Footer>
)

export { FooterView };