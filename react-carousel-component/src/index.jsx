import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  {
    url: 'https://www.smashbros.com/assets_v2/img/fighter/mario/main8.png',
    id: 1
  },
  {
    url: 'https://ssb.wiki.gallery/images/thumb/b/bb/Luigi_SSBU.png/1200px-Luigi_SSBU.png',
    id: 2
  },
  {
    url: 'https://ssb.wiki.gallery/images/thumb/0/04/Wario_SSBU.png/1200px-Wario_SSBU.png',
    id: 3
  },
  {
    url: 'https://ssb.wiki.gallery/images/b/b9/WaluigiSMP2.png',
    id: 4
  },
  {
    url: 'https://ssb.wiki.gallery/images/thumb/8/8d/Yoshi_SSBU.png/1200px-Yoshi_SSBU.png',
    id: 5
  }
];

ReactDOM.render(
  <Carousel data={images} />,
  document.querySelector('#root')
);
